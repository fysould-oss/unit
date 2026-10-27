using NUnit.Framework;

namespace Calculator.NUnit.Tests;

[TestFixture]
public class CalculatorTests
{
    [TestCase(2, 3, 5)] [TestCase(-2, -3, -5)] [TestCase(0, 5, 5)] [TestCase(1.5, 2.5, 4)]
    public void Add_ReturnsExpected(double a, double b, double expected) => Assert.That(BasicCalculator.Calculator.Add(a, b), Is.EqualTo(expected).Within(1e-10));

    [TestCase(10, 4, 6)] [TestCase(-10, -4, -6)] [TestCase(5, 0, 5)] [TestCase(5.5, 2, 3.5)]
    public void Subtract_ReturnsExpected(double a, double b, double expected) => Assert.That(BasicCalculator.Calculator.Subtract(a, b), Is.EqualTo(expected).Within(1e-10));

    [TestCase(6, 7, 42)] [TestCase(-3, 4, -12)] [TestCase(5, 0, 0)] [TestCase(2.5, 4, 10)]
    public void Multiply_ReturnsExpected(double a, double b, double expected) => Assert.That(BasicCalculator.Calculator.Multiply(a, b), Is.EqualTo(expected).Within(1e-10));

    [TestCase(20, 5, 4)] [TestCase(-20, 5, -4)] [TestCase(0, 5, 0)] [TestCase(7.5, 2.5, 3)]
    public void Divide_ReturnsExpected(double a, double b, double expected) => Assert.That(BasicCalculator.Calculator.Divide(a, b), Is.EqualTo(expected).Within(1e-10));

    [Test] public void Divide_ByZero_Throws() => Assert.Throws<DivideByZeroException>(() => BasicCalculator.Calculator.Divide(1, 0));
    [Test] public void Add_HandlesLargeFiniteValues() => Assert.That(BasicCalculator.Calculator.Add(1e100, 1e100), Is.EqualTo(2e100));
}
