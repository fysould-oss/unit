const { add, subtract, multiply, divide } = require("../../src/calculator");

describe("calculadora JavaScript (Jasmine)", () => {
  it("soma os casos comuns", () => [[2, 3, 5], [-2, -3, -5], [0, 5, 5], [1.5, 2.5, 4]].forEach(([a, b, n]) => expect(add(a, b)).toBeCloseTo(n)));
  it("subtrai os casos comuns", () => [[10, 4, 6], [-10, -4, -6], [5, 0, 5], [5.5, 2, 3.5]].forEach(([a, b, n]) => expect(subtract(a, b)).toBeCloseTo(n)));
  it("multiplica os casos comuns", () => [[6, 7, 42], [-3, 4, -12], [5, 0, 0], [2.5, 4, 10]].forEach(([a, b, n]) => expect(multiply(a, b)).toBeCloseTo(n)));
  it("divide os casos comuns", () => [[20, 5, 4], [-20, 5, -4], [0, 5, 0], [7.5, 2.5, 3]].forEach(([a, b, n]) => expect(divide(a, b)).toBeCloseTo(n)));
  it("rejeita divisão por zero", () => expect(() => divide(1, 0)).toThrowError(RangeError));
});
