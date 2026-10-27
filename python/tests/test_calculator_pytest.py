"""Testes da calculadora usando pytest."""

import pytest

from calculator import add, divide, multiply, subtract


@pytest.mark.parametrize(("a", "b", "expected"), [(2, 3, 5), (-2, -3, -5), (0, 5, 5), (1.5, 2.5, 4)])
def test_add(a, b, expected):
    assert add(a, b) == pytest.approx(expected)


@pytest.mark.parametrize(("a", "b", "expected"), [(10, 4, 6), (-10, -4, -6), (5, 0, 5), (5.5, 2, 3.5)])
def test_subtract(a, b, expected):
    assert subtract(a, b) == pytest.approx(expected)


@pytest.mark.parametrize(("a", "b", "expected"), [(6, 7, 42), (-3, 4, -12), (5, 0, 0), (2.5, 4, 10)])
def test_multiply(a, b, expected):
    assert multiply(a, b) == pytest.approx(expected)


@pytest.mark.parametrize(("a", "b", "expected"), [(20, 5, 4), (-20, 5, -4), (0, 5, 0), (7.5, 2.5, 3)])
def test_divide(a, b, expected):
    assert divide(a, b) == pytest.approx(expected)


def test_divide_by_zero():
    with pytest.raises(ZeroDivisionError, match="dividir por zero"):
        divide(1, 0)
