<?php

namespace Chartjs\Bundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

use Symfony\Component\Config\Definition\Builder\ArrayNodeDefinition;

class Configuration implements ConfigurationInterface
{
    /**
     * @inheritdoc
     */
    public function getConfigTreeBuilder() : TreeBuilder
    {
        $this->treeBuilder = new TreeBuilder('chartjs');

        $rootNode = $this->treeBuilder->getRootNode();
        $this->addGlobalOptionsSection($rootNode);

        return $this->treeBuilder;
    }

    private $treeBuilder;
    public function getTreeBuilder() : TreeBuilder { return $this->treeBuilder; }

    private function addGlobalOptionsSection(ArrayNodeDefinition $rootNode)
    {
        $rootNode
            ->children()
                ->booleanNode('autoappend')
                    ->info('Auto-append required dependencies into HTML page')
                    ->defaultValue(True)
                    ->end()
                ->scalarNode('javascript')
                    ->info('Chart.js file location')
                    ->defaultValue('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js')
                    ->end()
                ->scalarNode('stylesheet')
                    ->info('Chart.js stylesheet')
                    ->defaultValue('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.css')
                    ->end()
            ->end();
    }
}