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

use EasyCorp\Bundle\EasyAdminBundle\Provider\AdminContextProvider;

/**
 * @author Marco Meyer <marco.meyeconde@gmail.com>
 *
 * @final
 * @experimental
 */

use Twig\Extension\RuntimeExtensionInterface;

class ChartRuntime implements RuntimeExtensionInterface
{
    /**
     * @var Environment
     */
    private $twig;

    /**
     * @var AdminContextInterface
     */
     private $adminContextProvider;

    public function __construct()
    {
        // // Add chartJS variables to the Twig environment
        // $this->twig = $twig;
        // $this->twig->addGlobal("chartjs", $this->getJsLocation());
        // $this->twig->addGlobal("chartjs_stylesheet", $this->getStylesheetLocation());

        // // If EA3 is found include it by default in the interface
        // // NB: This weak dependence might be avoided in the hierarchy by adding ux-chartjs to EasyAdmin direction
        // $this->adminContextProvider = $adminContextProvider;
        // if($this->adminContextProvider) {

        //     $adminContext = $this->adminContextProvider->getContext();
        //     $adminContext->getAssets()->addHtmlContentToHead($this->getJsLocation());
        //     $adminContext->getAssets()->addHtmlContentToHead($this->getStylesheetLocation());
        // }
    }

    public function getJsLocation() {

        $url = "chart.js";
        if(empty($url)) throw new Exception("Chart.js is missing; Please check path provided for \"chartjs.location\" in ./config/packages/ux-chartjs.yaml");
        return "<script src=\"".$url."\"></script>";
    }

    public function getStylesheetLocation() {

        $url = "stylesheet.css";
        if(empty($url)) throw new Exception("Chart.js is missing; Please check path \"chartjs.stylesheet\" in ./config/packages/ux-chartjs.yaml");
        return "<link rel=\"stylesheet\" href=\"".$url."\">";
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