import { calculator } from "./calculator.js";

const result = document.querySelector<HTMLOutputElement>("#result")!;
const formNumber = (selector: string): number => {
  const raw = (document.querySelector<HTMLInputElement>(selector)!.value).trim().replace(",", ".");
  if (!raw || !/^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i.test(raw)) throw new Error("Digite números válidos nos dois campos.");
  const value = Number(raw);
  if (!Number.isFinite(value)) throw new Error("O valor precisa ser um número finito.");
  return value;
};

document.querySelector<HTMLButtonElement>("#calculate")!.addEventListener("click", () => {
  try {
    const a = formNumber("#a"), b = formNumber("#b");
    const operation = document.querySelector<HTMLSelectElement>("#op")!.value as keyof typeof calculator;
    result.value = `Resultado: ${new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 12 }).format(calculator[operation](a, b))}`;
    result.className = "";
  } catch (error) {
    result.value = error instanceof Error ? error.message : "Não foi possível calcular.";
    result.className = "error";
  }
});
