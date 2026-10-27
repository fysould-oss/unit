/** Operações matemáticas básicas. A divisão por zero lança RangeError. */
export const calculator = {
  add(a: number, b: number): number { return a + b; },
  subtract(a: number, b: number): number { return a - b; },
  multiply(a: number, b: number): number { return a * b; },
  divide(a: number, b: number): number {
    if (b === 0) throw new RangeError("Não é possível dividir por zero.");
    return a / b;
  },
};
