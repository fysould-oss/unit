<?php

declare(strict_types=1);

namespace BasicCalculator;

/** Operações aritméticas básicas. */
final class Calculator
{
    public static function add(float $a, float $b): float
    {
        return $a + $b;
    }

    public static function subtract(float $a, float $b): float
    {
        return $a - $b;
    }

    public static function multiply(float $a, float $b): float
    {
        return $a * $b;
    }

    /** Lança DivisionByZeroError quando o divisor é zero. */
    public static function divide(float $a, float $b): float
    {
        if ($b == 0.0) {
            throw new \DivisionByZeroError('Não é possível dividir por zero.');
        }

        return $a / $b;
    }
}
