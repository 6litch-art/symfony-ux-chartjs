<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Symfony\UX\Chartjs\Twig;

use Symfony\UX\Chartjs\Model\Chart;
use Twig\Environment;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;


use Symfony\Component\HttpKernel\KernelInterface;
use Twig\Extension\GlobalsInterface;

use Symfony\Component\Config\Definition\Exception\Exception;

/**
 * @author Marco Meyer <marco.meyerconde@gmail.com>
 *
 * @final
 * @experimental
 */

use Symfony\Component\DependencyInjection\Container;

class ChartjsTwigExtension extends AbstractExtension implements GlobalsInterface
{
    protected $chartJs;
    protected $stylesheet;

    public function getParameter(string $key = "") {

        if( !isset($this->container) )
            throw new Exception("Symfony container not found in BaseService. Did you overloaded BaseService::__constructor ?");

        if(empty($key))
           return $this->container->getParameter()->all();

        return ($this->container->hasParameter($key) ? $this->container->getParameter($key) : null);
    }

    public function __construct(KernelInterface $kernel)
    {
        $this->container = $kernel->getContainer();

        $this->chartJs = $this->container->getParameter("chartjs.javascript");
        $this->stylesheet = $this->container->getParameter("chartjs.stylesheet");
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('render_chart', [$this, 'renderChart'], ['needs_environment' => true, 'is_safe' => ['html']]),
            new TwigFunction('chartjs_render', [$this, 'renderChart'], ['needs_environment' => true, 'is_safe' => ['html']]),
        ];
    }

    public function getGlobals(): array {

        return array(
            'chartjs' => $this->chartJs,
            'chartjs_stylesheet' => $this->stylesheet
        );
    }

    public function renderChart(Environment $env, Chart $chart, array $attributes = []): string
    {
        $attributes["id"] = ($attributes["id"] ?? uniqid("chartjs_"));
        $chart->setAttributes(array_merge($chart->getAttributes(), $attributes));

        $script =  "<script>
                        var ctx = document.getElementById('".$chart->getAttributes()["id"]."').getContext('2d');
                        new Chart(ctx, ".json_encode($chart->createView()).");
                    </script>";

        $attr = "";
        foreach ($chart->getAttributes() as $name => $value) {

            if ('data-controller' === $name)
                continue;

            if (true === $value) {
                $attr .= ' '.$name.'="'.$name.'"';
            } elseif (false !== $value) {
                $attr .= ' '.$name.'="'.$value.'"';
            }
        }

        return "<canvas$attr></canvas>\n$script";
    }
}
