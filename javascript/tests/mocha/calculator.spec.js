const { expect } = require("chai");
const { add, subtract, multiply, divide } = require("../../src/calculator");

describe("calculadora JavaScript (Mocha/Chai)", () => {
  it("soma positivos, negativos, zero e decimais", () => {
    [[2, 3, 5], [-2, -3, -5], [0, 5, 5], [1.5, 2.5, 4]].forEach(([a, b, n]) => expect(add(a, b)).to.be.closeTo(n, 1e-10));
  });
  it("subtrai positivos, negativos, zero e decimais", () => {
    [[10, 4, 6], [-10, -4, -6], [5, 0, 5], [5.5, 2, 3.5]].forEach(([a, b, n]) => expect(subtract(a, b)).to.be.closeTo(n, 1e-10));
  });
  it("multiplica positivos, negativos, zero e decimais", () => {
    [[6, 7, 42], [-3, 4, -12], [5, 0, 0], [2.5, 4, 10]].forEach(([a, b, n]) => expect(multiply(a, b)).to.be.closeTo(n, 1e-10));
  });
  it("divide positivos, negativos, zero e decimais", () => {
    [[20, 5, 4], [-20, 5, -4], [0, 5, 0], [7.5, 2.5, 3]].forEach(([a, b, n]) => expect(divide(a, b)).to.be.closeTo(n, 1e-10));
  });
  it("lança erro ao dividir por zero", () => expect(() => divide(1, 0)).to.throw(RangeError));
});
