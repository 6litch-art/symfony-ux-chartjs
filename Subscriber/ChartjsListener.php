<?php

namespace Symfony\UX\Chartjs\Subscriber;

use \Symfony\Component\HttpKernel\Event\RequestEvent;

use Twig\Environment;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpKernel\Event\ResponseEvent;

class ChartjsListener
{
    private $twig;

    public function __construct(ParameterBagInterface $parameterBag, Environment $twig, RequestStack $requestStack)
    {
        $this->twig         = $twig;
        $this->requestStack = $requestStack;

        $this->autoAppend = $parameterBag->get("chartjs.autoappend");
        $this->javascript = $parameterBag->get("chartjs.javascript");
        $this->stylesheet = $parameterBag->get("chartjs.stylesheet");
    }

    public function isProfiler()
    {
        $request = $this->requestStack->getCurrentRequest();
        $route = $request->get('_route');
        return $route == "_wdt" || $route == "_profiler";
    }

    private function allowRender($event)
    {
        if (!$this->autoAppend)
            return false;

        if (!in_array($event->getResponse()->headers->get('content-type'), array('text/html', null)))
            return false;

        $contentType = $event->getResponse()->headers->get('content-type');
        if ($contentType && !str_contains($contentType, "text/html"))
            return false;
    
        if($this->isProfiler())
            return false;

        if (!$event->isMainRequest())
            return false;
        
        return true;
    }

    public function getAsset(string $url): string
    {
        $url = trim($url);
        $parseUrl = parse_url($url);
        if($parseUrl["scheme"] ?? false)
            return $url;

        $request = $this->requestStack->getCurrentRequest();
        $baseDir = $request ? $request->getBasePath() : $_SERVER["CONTEXT_PREFIX"] ?? "";

        $path = trim($parseUrl["path"]);
        if($path == "/") return $baseDir;
        else if(!str_starts_with($path, "/"))
            $path = $baseDir."/".$path;

        return $path;
    }

    public function onKernelRequest(RequestEvent $event)
    {
        $javascript = "<script src='".$this->getAsset($this->javascript)."'></script>";
        $stylesheet = "<link rel='stylesheet' href='".$this->getAsset($this->stylesheet)."'>";

        $this->twig->addGlobal("chartjs", ["javascript" => $javascript, "stylesheet" => $stylesheet]);
    }

    public function onKernelResponse(ResponseEvent $event)
    {
        if (!$this->allowRender($event)) return false;

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

        $response->setContent($content);

        return true;
    }
}
