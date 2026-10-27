import { calculator as c } from "../../src/calculator";

describe("calculadora TypeScript (Jest)", () => {
  test.each([[2, 3, 5], [-2, -3, -5], [0, 5, 5], [1.5, 2.5, 4]])("soma %s e %s", (a, b, n) => expect(c.add(a, b)).toBeCloseTo(n));
  test.each([[10, 4, 6], [-10, -4, -6], [5, 0, 5], [5.5, 2, 3.5]])("subtrai %s e %s", (a, b, n) => expect(c.subtract(a, b)).toBeCloseTo(n));
  test.each([[6, 7, 42], [-3, 4, -12], [5, 0, 0], [2.5, 4, 10]])("multiplica %s e %s", (a, b, n) => expect(c.multiply(a, b)).toBeCloseTo(n));
  test.each([[20, 5, 4], [-20, 5, -4], [0, 5, 0], [7.5, 2.5, 3]])("divide %s por %s", (a, b, n) => expect(c.divide(a, b)).toBeCloseTo(n));
  test("lança erro ao dividir por zero", () => expect(() => c.divide(1, 0)).toThrow(RangeError));
});
