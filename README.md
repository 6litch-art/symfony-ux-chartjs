# Symfony UX Chart.js

It is a fork of symfony/ux-chartjs, but without JS dependencies.

```sh
composer require symfony/ux-chartjs

# Don't forget to install the JavaScript dependencies as well and compile
yarn install --force
yarn encore dev
```

## Usage

To use Symfony UX Chart.js, inject the `ChartBuilderInterface` service and
create charts in PHP:

```php
// ...
use Symfony\UX\Builder\ChartBuilderInterface;
use Symfony\UX\Model\Chart;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
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

        return $this->render('home/index.html.twig', [
            'chart' => $chart,
        ]);
    }
}
```

All options and data are provided as-is to Chart.js. You can read
[Chart.js documentation](https://www.chartjs.org/docs/latest/) to discover them all.

Once created in PHP, a chart can be displayed using Twig:

```twig
{{ render_chart(chart) }}

{# You can pass HTML attributes as a second argument to add them on the <canvas> tag #}
{{ render_chart(chart, {'class': 'my-chart'}) }}
```

### Extend the default behavior

Symfony UX Chart.js allows you to extend its default behavior using a custom Stimulus controller:

```js
// mychart_controller.js

import { Controller } from 'stimulus';

export default class extends Controller {
    connect() {
        this.element.addEventListener('chartjs:connect', this._onConnect);
    }

    disconnect() {
        // You should always remove listeners when the controller is disconnected to avoid side effects
        this.element.removeEventListener('chartjs:connect', this._onConnect);
    }

    _onConnect(event) {
        // The chart was just created
        console.log(event.detail.chart); // You can access the chart instance using the event details

        // For instance you can listen to additional events
        event.detail.chart.options.onHover = (mouseEvent) => {
            /* ... */
        };
        event.detail.chart.options.onClick = (mouseEvent) => {
            /* ... */
        };
    }
}
```

Then in your render call, add your controller as an HTML attribute:

```twig
{{ render_chart(chart, {'data-controller': 'mychart'}) }}
```

## Backward Compatibility promise

This bundle aims at following the same Backward Compatibility promise as the Symfony framework:
[https://symfony.com/doc/current/contributing/code/bc.html](https://symfony.com/doc/current/contributing/code/bc.html)

However it is currently considered
[**experimental**](https://symfony.com/doc/current/contributing/code/experimental.html),
meaning it is not bound to Symfony's BC policy for the moment.

## Run tests

### PHP tests

```sh
php vendor/bin/phpunit
```

### JavaScript tests

```sh
cd Resources/assets
yarn test
```
