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

/**
 * @author Marco Meyer <marco.meyeconde@gmail.com>
 *
 * @final
 * @experimental
 */

class ChartExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('chartjs_render', [ChartRuntime::class, 'renderChart'], ['needs_environment' => true, 'is_safe' => ['html']]),
        ];
    }
}
