"use strict";

/** Operações matemáticas básicas. A divisão por zero lança RangeError. */
const calculator = {
  add(a, b) { return a + b; },
  subtract(a, b) { return a - b; },
  multiply(a, b) { return a * b; },
  divide(a, b) {
    if (b === 0) throw new RangeError("Não é possível dividir por zero.");
    return a / b;
  },
};

/* istanbul ignore next -- environment-specific browser/CommonJS export bridge */
if (typeof module !== "undefined" && module.exports) module.exports = calculator;
/* istanbul ignore next -- environment-specific browser/CommonJS export bridge */
if (typeof window !== "undefined") window.calculator = calculator;
