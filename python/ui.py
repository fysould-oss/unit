"""Interface gráfica Tkinter para a calculadora Python."""

import tkinter as tk
from tkinter import ttk

from calculator import add, divide, multiply, subtract


OPERATIONS = {
    "Adição (+)": add,
    "Subtração (−)": subtract,
    "Multiplicação (×)": multiply,
    "Divisão (÷)": divide,
}


def main() -> None:
    root = tk.Tk()
    root.title("Calculadora Python")
    root.geometry("390x450")
    root.resizable(False, False)
    root.configure(background="#eef4ff")

    panel = ttk.Frame(root, padding=26)
    panel.pack(expand=True, fill="both", padx=20, pady=20)
    ttk.Label(panel, text="PYTHON", foreground="#3478f6", font=("Segoe UI", 9, "bold")).pack(anchor="w")
    ttk.Label(panel, text="Calculadora", font=("Segoe UI", 22, "bold")).pack(anchor="w", pady=(4, 2))
    ttk.Label(panel, text="Operações básicas, sem complicação.").pack(anchor="w", pady=(0, 16))

    ttk.Label(panel, text="Primeiro número").pack(anchor="w", pady=(7, 4))
    first = ttk.Entry(panel, font=("Segoe UI", 12))
    first.pack(fill="x")
    ttk.Label(panel, text="Operação").pack(anchor="w", pady=(12, 4))
    operation = ttk.Combobox(panel, values=list(OPERATIONS), state="readonly", font=("Segoe UI", 11))
    operation.current(0)
    operation.pack(fill="x")
    ttk.Label(panel, text="Segundo número").pack(anchor="w", pady=(12, 4))
    second = ttk.Entry(panel, font=("Segoe UI", 12))
    second.pack(fill="x")
    result = ttk.Label(panel, text="O resultado aparece aqui", wraplength=310, font=("Segoe UI", 11, "bold"))
    result.pack(fill="x", pady=(18, 0))

    def calculate() -> None:
        try:
            a = float(first.get().strip().replace(",", "."))
            b = float(second.get().strip().replace(",", "."))
            value = OPERATIONS[operation.get()](a, b)
            result.configure(text=f"Resultado: {value:g}", foreground="#263954")
        except ValueError:
            result.configure(text="Digite números válidos nos dois campos.", foreground="#b42318")
        except ZeroDivisionError as error:
            result.configure(text=str(error), foreground="#b42318")

    ttk.Button(panel, text="Calcular", command=calculate).pack(fill="x", pady=(19, 0), ipady=7)
    root.bind("<Return>", lambda _event: calculate())
    first.focus_set()
    root.mainloop()


if __name__ == "__main__":
    main()
