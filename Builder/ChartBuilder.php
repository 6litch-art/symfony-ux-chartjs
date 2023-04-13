<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Chartjs\Bundle\Builder;

use Chartjs\Bundle\Model\Chart;

/**
 * @author Titouan Galopin <galopintitouan@gmail.com>
 *
 * @final
 * @experimental
 */
class ChartBuilder implements ChartBuilderInterface
{
    public function createChart(string $type): Chart
    {
        return new Chart($type);
    }
}
