<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Chartjs\Bundle\ChartjsBundle\Chartjs\Builder;

use Chartjs\Bundle\ChartjsBundle\Chartjs\Model\Chart;

/**
 * @author Titouan Galopin <galopintitouan@gmail.com>
 *
 * @experimental
 */
interface ChartBuilderInterface
{
    public function createChart(string $type): Chart;
}
