<?php

namespace Symfony\UX\Chartjs\Subscriber;

use Symfony\Component\HttpKernel\Event\RequestEvent;

use Twig\Environment;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpKernel\Event\ResponseEvent;

class ChartjsListener
{
    /** @var bool */
    protected ?bool $autoAppend;
    /** @var string */
    protected ?string $javascript;
    /** @var string */
    protected ?string $stylesheet;

    /**
     * @var Environment
     */
    protected $twig;

    /**
     * @var RequestStack
     */
    protected $requestStack;

    public function __construct(ParameterBagInterface $parameterBag, Environment $twig, RequestStack $requestStack)
    {
        $this->twig         = $twig;
        $this->requestStack = $requestStack;

        $this->autoAppend = $parameterBag->get("chartjs.autoappend");
        $this->javascript = $parameterBag->get("chartjs.javascript");
        $this->stylesheet = $parameterBag->get("chartjs.stylesheet");
    }

    public function isProfiler($event)
    {
        $route = $event->getRequest()->get('_route') ?? "";
        return str_starts_with($route, "_wdt") || str_starts_with($route, "_profiler");
    }

    private function allowRender(ResponseEvent $event)
    {
        if (!$this->autoAppend) {
            return false;
        }

        if (!in_array($event->getResponse()->headers->get('content-type'), array('text/html', null))) {
            return false;
        }

        $contentType = $event->getResponse()->headers->get('content-type');
        if ($contentType && !str_contains($contentType, "text/html")) {
            return false;
        }

        if (!$event->isMainRequest()) {
            return false;
        }

        return !$this->isProfiler($event);
    }

    public function getAsset(string $url): string
    {
        $url = trim($url);
        $parseUrl = parse_url($url);
        if ($parseUrl["scheme"] ?? false) {
            return $url;
        }

        $request = $this->requestStack->getCurrentRequest();
        $baseDir = $request ? $request->getBasePath() : $_SERVER["CONTEXT_PREFIX"] ?? "";

        $path = trim($parseUrl["path"]);
        if ($path == "/") {
            return $baseDir;
        } elseif (!str_starts_with($path, "/")) {
            $path = $baseDir."/".$path;
        }

        return $path;
    }

    public function onKernelRequest(RequestEvent $event)
    {
        $javascript = "<script src='".$this->getAsset($this->javascript)."' defer></script>";
        $stylesheet = "<link rel='stylesheet' href='".$this->getAsset($this->stylesheet)."'>";

        $this->twig->addGlobal("chartjs", ["javascript" => $javascript, "stylesheet" => $stylesheet]);
    }

    public function onKernelResponse(ResponseEvent $event)
    {
        if (!$this->allowRender($event)) {
            return false;
        }

        $response = $event->getResponse();
        $javascript = $this->twig->getGlobals()["chartjs"]["javascript"] ?? "";
        $stylesheet = $this->twig->getGlobals()["chartjs"]["stylesheet"] ?? "";

        $content = preg_replace([
            '/<\/head\b[^>]*>/',
            '/<\/head\b[^>]*>/',
        ], [
            $javascript."$0",
            $stylesheet."$0",
        ], $response->getContent(), 1);

        if (!is_instanceof($response, [StreamedResponse::class, BinaryFileResponse::class])) {
            $response->setContent($content);
        }

        return true;
    }
}
