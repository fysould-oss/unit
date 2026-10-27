using Xunit;
using Calc = BasicCalculator.Calculator;

namespace Calculator.XUnit.Tests;

public class CalculatorTests
{
    [Theory] [InlineData(2, 3, 5)] [InlineData(-2, -3, -5)] [InlineData(0, 5, 5)] [InlineData(1.5, 2.5, 4)]
    public void Add_ReturnsExpected(double a, double b, double expected) => Assert.Equal(expected, Calc.Add(a, b), 10);

    [Theory] [InlineData(10, 4, 6)] [InlineData(-10, -4, -6)] [InlineData(5, 0, 5)] [InlineData(5.5, 2, 3.5)]
    public void Subtract_ReturnsExpected(double a, double b, double expected) => Assert.Equal(expected, Calc.Subtract(a, b), 10);

    [Theory] [InlineData(6, 7, 42)] [InlineData(-3, 4, -12)] [InlineData(5, 0, 0)] [InlineData(2.5, 4, 10)]
    public void Multiply_ReturnsExpected(double a, double b, double expected) => Assert.Equal(expected, Calc.Multiply(a, b), 10);

    [Theory] [InlineData(20, 5, 4)] [InlineData(-20, 5, -4)] [InlineData(0, 5, 0)] [InlineData(7.5, 2.5, 3)]
    public void Divide_ReturnsExpected(double a, double b, double expected) => Assert.Equal(expected, Calc.Divide(a, b), 10);

    [Fact] public void Divide_ByZero_Throws() => Assert.Throws<DivideByZeroException>(() => Calc.Divide(1, 0));
    [Fact] public void Add_HandlesLargeFiniteValues() => Assert.Equal(2e100, Calc.Add(1e100, 1e100));
}
