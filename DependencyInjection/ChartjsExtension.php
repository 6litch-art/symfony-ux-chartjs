<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Symfony\UX\Chartjs\DependencyInjection;

use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Loader\XmlFileLoader;
use Symfony\Component\Config\Definition\Processor;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\UX\Chartjs\Builder\ChartBuilder;
use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;
use Symfony\UX\Chartjs\Twig\ChartjsTwigExtension;
use Twig\Environment;

/**
 * @author Marco Meyer <marco.meyerconde@gmail.com>
 *
 * @internal
 */
class ChartjsExtension extends Extension
{
    public function load(array $configs, ContainerBuilder $container)
    {
        // Load builder
        $container
            ->setDefinition('chartjs.builder', new Definition(ChartBuilder::class))
            ->setPublic(false)
        ;

        $container
            ->setAlias(ChartBuilderInterface::class, 'chartjs.builder')
            ->setPublic(false)
        ;

        // Format XML
        $loader = new XmlFileLoader($container, new FileLocator(\dirname(__DIR__, 1).'/Resources/config'));
        $loader->load('services.xml');

        // Format YAML
        //$loader = new Loader\YamlFileLoader($container, new FileLocator(__DIR__ . '/../Resources/config'));
        //$loader->load('services.yaml');

        // Format PHP
        //$loader = new PhpFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        //$loader->load('services.php');

        //
        // Configuration file: ./config/package/acme_bundle.yaml
        $processor = new Processor();
        $configuration = new Configuration();
        $config = $processor->processConfiguration($configuration, $configs);
    }
}
