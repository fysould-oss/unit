const { add, subtract, multiply, divide } = require("../../src/calculator");

describe("calculadora JavaScript (Jest)", () => {
  test.each([[2, 3, 5], [-2, -3, -5], [0, 5, 5], [1.5, 2.5, 4]])("adiciona %s e %s", (a, b, expected) => expect(add(a, b)).toBeCloseTo(expected));
  test.each([[10, 4, 6], [-10, -4, -6], [5, 0, 5], [5.5, 2, 3.5]])("subtrai %s e %s", (a, b, expected) => expect(subtract(a, b)).toBeCloseTo(expected));
  test.each([[6, 7, 42], [-3, 4, -12], [5, 0, 0], [2.5, 4, 10]])("multiplica %s e %s", (a, b, expected) => expect(multiply(a, b)).toBeCloseTo(expected));
  test.each([[20, 5, 4], [-20, 5, -4], [0, 5, 0], [7.5, 2.5, 3]])("divide %s por %s", (a, b, expected) => expect(divide(a, b)).toBeCloseTo(expected));
  test("rejeita divisor zero", () => expect(() => divide(1, 0)).toThrow(RangeError));
});
