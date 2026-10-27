"""Operações básicas de uma calculadora."""


def add(a: float, b: float) -> float:
    """Retorna a soma de dois números."""
    return a + b


def subtract(a: float, b: float) -> float:
    """Retorna a diferença entre dois números."""
    return a - b


def multiply(a: float, b: float) -> float:
    """Retorna o produto de dois números."""
    return a * b


def divide(a: float, b: float) -> float:
    """Divide a por b. Lança ZeroDivisionError quando b é zero."""
    if b == 0:
        raise ZeroDivisionError("Não é possível dividir por zero.")
    return a / b
