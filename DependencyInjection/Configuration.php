<?php

namespace Symfony\UX\Chartjs\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

use Symfony\Component\Config\Definition\Builder\ArrayNodeDefinition;

class Configuration implements ConfigurationInterface
{
    /**
     * @inheritdoc
     */
    public function getConfigTreeBuilder()
    {
        $treeBuilder = new TreeBuilder('ux_chartjs');

        $rootNode = $treeBuilder->getRootNode();
        $this->addGlobalOptionsSection($rootNode);

        return $treeBuilder;
    }

    private function addGlobalOptionsSection(ArrayNodeDefinition $rootNode)
    {
        $rootNode
            ->children()
                ->scalarNode('chartjs')
                    ->info('Chart.js file location')
                ->end()
                ->scalarNode('chartjs_stylesheet')
                    ->info('Chart.js stylesheet')
                ->end()
            ->end()
        ;
    }

}