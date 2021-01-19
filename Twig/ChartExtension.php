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

use Twig\Extension\GlobalsInterface;
use App\Twig\ChartRuntime;
/**
 * @author Marco Meyer <marco.meyeconde@gmail.com>
 *
 * @final
 * @experimental
 */

<<<<<<< HEAD
use Twig\Extension\RuntimeExtensionInterface;

class ChartExtension extends AbstractExtension implements GlobalsInterface
=======
class ChartExtension extends AbstractExtension
>>>>>>> d4ec09d039beff6554f736c9ec9a1a97fa3230fe
{
    protected $container;
    // public function __construct(ContainerBuilder $container)
    // {
    //     $this->container = $container;
    // }

    public function getFunctions(): array
    {
        return [
<<<<<<< HEAD
            new TwigFunction('render_chart', [$this, 'renderChart'], ['needs_environment' => true, 'is_safe' => ['html']]),
            new TwigFunction('chartjs_render', [$this, 'renderChart'], ['needs_environment' => true, 'is_safe' => ['html']]),
        ];
    }

    public function getGlobals(): array {

        return array(
            'chartjs' => "XXXXXXXXX",
            'chartjs_stylesheet' => "YYYY"
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
=======
            new TwigFunction('chartjs_render', [ChartRuntime::class, 'renderChart'], ['needs_environment' => true, 'is_safe' => ['html']]),
        ];
    }
>>>>>>> d4ec09d039beff6554f736c9ec9a1a97fa3230fe
}
