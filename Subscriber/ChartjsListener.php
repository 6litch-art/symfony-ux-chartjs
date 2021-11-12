<?php

namespace Symfony\UX\Chartjs\Subscriber;

use \Symfony\Component\HttpKernel\Event\RequestEvent;
use \Symfony\Component\HttpFoundation\Response;

use Twig\Environment;
use Base\Service\BaseService;
use EasyCorp\Bundle\EasyAdminBundle\Provider\AdminContextProvider;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\KernelInterface;

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

    private function allowRender($event)
    {
        if (!$this->autoAppend)
            return false;

        if (!in_array($event->getResponse()->headers->get('content-type'), array('text/html', null)))
            return false;

        $contentType = $event->getResponse()->headers->get('content-type');
        if ($contentType && !str_contains($contentType, "text/html"))
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

        $path = $parseUrl["path"];
        if(!str_starts_with($path, "/"))
            $path = $this->requestStack->getCurrentRequest()->getBasePath()."/".$path;

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
