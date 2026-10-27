const result = document.querySelector("#result");
document.querySelector("#calculate").addEventListener("click", () => {
  const parse = (selector) => {
    const raw = document.querySelector(selector).value.trim().replace(",", ".");
    if (!raw || !/^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i.test(raw)) throw new Error("Digite números válidos nos dois campos.");
    const n = Number(raw);
    if (!Number.isFinite(n)) throw new Error("O valor precisa ser um número finito.");
    return n;
  };
  try {
    const a = parse("#a"), b = parse("#b"), operation = document.querySelector("#op").value;
    const value = window.calculator[operation](a, b);
    result.value = `Resultado: ${new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 12 }).format(value)}`;
    result.className = "";
  } catch (error) {
    result.value = error.message;
    result.className = "error";
  }
});
