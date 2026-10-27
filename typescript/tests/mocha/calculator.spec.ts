import { expect } from "chai";
import { calculator as c } from "../../src/calculator";

describe("calculadora TypeScript (Mocha/Chai)", () => {
  it("soma casos positivos, negativos, zero e decimais", () => [[2, 3, 5], [-2, -3, -5], [0, 5, 5], [1.5, 2.5, 4]].forEach(([a, b, n]) => expect(c.add(a, b)).to.be.closeTo(n, 1e-10)));
  it("subtrai casos positivos, negativos, zero e decimais", () => [[10, 4, 6], [-10, -4, -6], [5, 0, 5], [5.5, 2, 3.5]].forEach(([a, b, n]) => expect(c.subtract(a, b)).to.be.closeTo(n, 1e-10)));
  it("multiplica casos positivos, negativos, zero e decimais", () => [[6, 7, 42], [-3, 4, -12], [5, 0, 0], [2.5, 4, 10]].forEach(([a, b, n]) => expect(c.multiply(a, b)).to.be.closeTo(n, 1e-10)));
  it("divide casos positivos, negativos, zero e decimais", () => [[20, 5, 4], [-20, 5, -4], [0, 5, 0], [7.5, 2.5, 3]].forEach(([a, b, n]) => expect(c.divide(a, b)).to.be.closeTo(n, 1e-10)));
  it("lança erro na divisão por zero", () => expect(() => c.divide(1, 0)).to.throw(RangeError));
});
