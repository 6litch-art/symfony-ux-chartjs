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
        $this->treeBuilder = new TreeBuilder('chartjs');

        $rootNode = $this->treeBuilder->getRootNode();
        $this->addGlobalOptionsSection($rootNode);

        return $this->treeBuilder;
    }

    private $treeBuilder;
    public function getTreeBuilder() { return $this->treeBuilder; }

    private function addGlobalOptionsSection(ArrayNodeDefinition $rootNode)
    {
        $rootNode
            ->children()
                ->scalarNode('javascript')
                    ->info('Chart.js file location')
                    ->defaultValue('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js')
                ->end()
                ->scalarNode('stylesheet')
                    ->info('Chart.js stylesheet')
                    ->defaultValue('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.css')
                ->end()
            ->end()
        ;
    }

}