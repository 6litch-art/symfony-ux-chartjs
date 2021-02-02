<?php

namespace Symfony\UX\Chartjs\Subscriber;

use \Symfony\Component\HttpKernel\Event\RequestEvent;
use \Symfony\Component\HttpFoundation\Response;

use Twig\Environment;
use Base\BaseBundle\Service\BaseService;
use EasyCorp\Bundle\EasyAdminBundle\Provider\AdminContextProvider;

use Symfony\Component\HttpKernel\KernelInterface;

class ChartjsListener
{
    private $twig;
    private $baseService;
    private $adminContextProvider;

    public function __construct(KernelInterface $kernel, Environment $twig)
    {
        $this->jsFile  = $kernel->getContainer()->getParameter("chartjs.javascript");
        $this->cssFile = $kernel->getContainer()->getParameter("chartjs.stylesheet");

        // Attempt to find BaseService from BaseBundle
        if(class_exists(BaseService::class))
            $this->baseService = $kernel->getContainer()->get(BaseService::class);

        // Attempt to get twig
        if (class_exists(Environment::class))
            $this->twig = $twig;

        // Attempt to declare EA provider (if found)
        if(class_exists(AdminContextProvider::class))
            $this->adminContextProvider = new AdminContextProvider(
                $kernel->getContainer()->get("request_stack")
            );
    }

    public function onKernelRequest(RequestEvent $event)
    {
        // If BaseService from my bundle is detected..
        if($this->baseService) {

            $this->baseService->addJavascriptFile($this->jsFile);
            $this->baseService->addStylesheetFile($this->cssFile);

        // If EA is detected
        } else if($this->adminContextProvider) {

            $adminContext = $this->adminContextProvider->getContext();
            if($adminContext) $adminContext->getAssets()->addCssFile($this->cssFile);
            if($adminContext) $adminContext->getAssets()->addJsFile($this->jsFile);

        } else {
            $this->twig->addGlobal("javascripts", "<script src='$this->jsFile'></script>");
            $this->twig->addGlobal("stylesheets", "<link rel='stylesheet' href='$this->cssFile'>");
        }
    }
}
