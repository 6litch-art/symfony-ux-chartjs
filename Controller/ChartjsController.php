<?php

namespace Symfony\UX\Chartjs\Controller;

use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\UX\Chartjs\Model\Chart;

class ChartjsController extends AbstractController
{
    /**
     * Controller example
     *
     * @Route("/ux/chartjs", name="ux_chartjs")
     */
    public function index(ChartBuilderInterface $chartBuilder): Response
    {
        $chart = $chartBuilder->createChart(Chart::TYPE_LINE);
        $chart->setData([
            'labels' => ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            'datasets' => [
                [
                    'label' => 'My First dataset',
                    'backgroundColor' => 'rgb(255, 99, 132)',
                    'borderColor' => 'rgb(255, 99, 132)',
                    'data' => [0, 10, 5, 2, 20, 30, 45],
                ],
            ],
        ]);

        $chart->setOptions([/* ... */]);

        return $this->render('@Chartjs/welcome.html.twig', [
            'chart' => $chart,
        ]);
    }
}
