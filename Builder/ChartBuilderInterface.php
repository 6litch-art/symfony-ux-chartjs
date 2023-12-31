<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Symfony\UX\Builder;

use Symfony\UX\Model\Chart;

/**
 * @author Titouan Galopin <galopintitouan@gmail.com>
 *
 * @experimental
 */
interface ChartBuilderInterface
{
    public function createChart(string $type): Chart;
}
