"""Testes da calculadora usando o módulo nativo unittest."""

import unittest

from calculator import add, divide, multiply, subtract


class CalculatorTests(unittest.TestCase):
    def test_add(self):
        for a, b, expected in [(2, 3, 5), (-2, -3, -5), (0, 5, 5), (1.5, 2.5, 4)]:
            with self.subTest(a=a, b=b):
                self.assertAlmostEqual(add(a, b), expected)

    def test_subtract(self):
        for a, b, expected in [(10, 4, 6), (-10, -4, -6), (5, 0, 5), (5.5, 2, 3.5)]:
            with self.subTest(a=a, b=b):
                self.assertAlmostEqual(subtract(a, b), expected)

    def test_multiply(self):
        for a, b, expected in [(6, 7, 42), (-3, 4, -12), (5, 0, 0), (2.5, 4, 10)]:
            with self.subTest(a=a, b=b):
                self.assertAlmostEqual(multiply(a, b), expected)

    def test_divide(self):
        for a, b, expected in [(20, 5, 4), (-20, 5, -4), (0, 5, 0), (7.5, 2.5, 3)]:
            with self.subTest(a=a, b=b):
                self.assertAlmostEqual(divide(a, b), expected)

    def test_divide_by_zero(self):
        with self.assertRaisesRegex(ZeroDivisionError, "dividir por zero"):
            divide(1, 0)


if __name__ == "__main__":
    unittest.main()
