<?php

declare(strict_types=1);

namespace BasicCalculator\Tests;

use BasicCalculator\Calculator;
use DivisionByZeroError;
use PHPUnit\Framework\TestCase;

final class CalculatorTest extends TestCase
{
    public function testAdd(): void
    {
        foreach ([[2, 3, 5], [-2, -3, -5], [0, 5, 5], [1.5, 2.5, 4]] as [$a, $b, $expected]) {
            self::assertEqualsWithDelta($expected, Calculator::add($a, $b), 1e-10);
        }
    }

    public function testSubtract(): void
    {
        foreach ([[10, 4, 6], [-10, -4, -6], [5, 0, 5], [5.5, 2, 3.5]] as [$a, $b, $expected]) {
            self::assertEqualsWithDelta($expected, Calculator::subtract($a, $b), 1e-10);
        }
    }

    public function testMultiply(): void
    {
        foreach ([[6, 7, 42], [-3, 4, -12], [5, 0, 0], [2.5, 4, 10]] as [$a, $b, $expected]) {
            self::assertEqualsWithDelta($expected, Calculator::multiply($a, $b), 1e-10);
        }
    }

    public function testDivide(): void
    {
        foreach ([[20, 5, 4], [-20, 5, -4], [0, 5, 0], [7.5, 2.5, 3]] as [$a, $b, $expected]) {
            self::assertEqualsWithDelta($expected, Calculator::divide($a, $b), 1e-10);
        }
    }

    public function testDivideByZeroThrows(): void
    {
        $this->expectException(DivisionByZeroError::class);
        Calculator::divide(1, 0);
    }
}
