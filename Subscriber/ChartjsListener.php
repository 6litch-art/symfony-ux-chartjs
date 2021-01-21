<?php

namespace Symfony\UX\Chartjs\Subscriber;

use \Symfony\Component\HttpKernel\Event\RequestEvent;
use \Symfony\Component\HttpFoundation\Response;

use Twig\Environment;

use LOL\Base\Test2;
use Base\BaseBundle\Service\BaseService;
use EasyCorp\Bundle\EasyAdminBundle\Provider\AdminContextProvider;

use Symfony\Component\HttpKernel\KernelInterface;

class ChartjsListener
{
    private $twig;
    private $baseService;
    private $adminContextProvider;

    public function __construct(KernelInterface $kernel)
    {
        // Attempt to find BaseService from BaseBundle
        if(class_exists(BaseService::class))
            $this->baseService = $kernel->getContainer()->get(BaseService::class);

        // Attempt to declare EA provider (if found)
        if(class_exists(AdminContextProvider::class))
            $this->adminContextProvider = new AdminContextProvider(
                $kernel->getContainer()->get("request_stack")
            );
    }

    public function onKernelRequest(RequestEvent $event)
    {
        // PASS FILE FROM CONFIG.. (Framework config, Flex config, Environment config, Local default config)
        $jsFile = "test.js";
        $cssFile = "test.css";

        if($this->baseService) {

            $this->baseService->addJavascriptFile($jsFile);
            $this->baseService->addStylesheetFile($cssFile);

        } else if($this->adminContextProvider) {

            $adminContext = $this->adminContextProvider->getContext();
            if($adminContext) $adminContext->getAssets()->addCssFile($cssFile);
            if($adminContext) $adminContext->getAssets()->addJsFile($jsFile);

        }
    }
}
