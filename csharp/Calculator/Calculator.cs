namespace BasicCalculator;

/// <summary>Operações aritméticas básicas.</summary>
public static class Calculator
{
    public static double Add(double a, double b) => a + b;

    public static double Subtract(double a, double b) => a - b;

    public static double Multiply(double a, double b) => a * b;

    /// <summary>Divide a por b; lança <see cref="DivideByZeroException"/> se b for zero.</summary>
    public static double Divide(double a, double b)
    {
        if (b == 0)
        {
            throw new DivideByZeroException("Não é possível dividir por zero.");
        }

        return a / b;
    }
}
