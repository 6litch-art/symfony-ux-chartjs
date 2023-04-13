<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Chartjs\Bundle\DependencyInjection;

use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Loader\XmlFileLoader;
use Symfony\Component\Config\Definition\Processor;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Chartjs\Bundle\Builder\ChartBuilder;
use Chartjs\Bundle\Builder\ChartBuilderInterface;
use Chartjs\Bundle\Twig\ChartjsTwigExtension;
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
            ->setPublic(false);
        $container
            ->setAlias(ChartBuilderInterface::class, 'chartjs.builder')
            ->setPublic(false);

        // Format XML
        $loader = new XmlFileLoader($container, new FileLocator(\dirname(__DIR__, 1).'/Resources/config'));
        $loader->load('services.xml');

        $processor = new Processor();
        $configuration = new Configuration();
        $config = $processor->processConfiguration($configuration, $configs);
        $this->setConfiguration($container, $config, $configuration->getTreeBuilder()->getRootNode()->getNode()->getName());
    }

    public function setConfiguration(ContainerBuilder $container, array $config, $globalKey = "")
    {
        foreach($config as $key => $value) {

            if (!empty($globalKey)) $key = $globalKey.".".$key;

            if (is_array($value)) $this->setConfiguration($container, $value, $key);
            else $container->setParameter($key, $value);
        }
    }
}
