using System.Globalization;
using Calc = BasicCalculator.Calculator;

namespace Calculator.WinForms;

internal static class Program
{
    [STAThread]
    private static void Main()
    {
        ApplicationConfiguration.Initialize();
        Application.Run(new CalculatorForm());
    }
}

internal sealed class CalculatorForm : Form
{
    private readonly TextBox _first = new();
    private readonly TextBox _second = new();
    private readonly ComboBox _operation = new();
    private readonly Label _result = new();

    public CalculatorForm()
    {
        Text = "Calculadora C#";
        ClientSize = new Size(390, 470);
        FormBorderStyle = FormBorderStyle.FixedDialog;
        MaximizeBox = false;
        BackColor = Color.FromArgb(238, 244, 255);
        Font = new Font("Segoe UI", 10);

        var panel = new TableLayoutPanel { Dock = DockStyle.Fill, Padding = new Padding(28), ColumnCount = 1, RowCount = 9 };
        panel.RowStyles.Add(new RowStyle(SizeType.Absolute, 24));
        panel.RowStyles.Add(new RowStyle(SizeType.Absolute, 44));
        panel.RowStyles.Add(new RowStyle(SizeType.Absolute, 32));
        for (var i = 0; i < 5; i++) panel.RowStyles.Add(new RowStyle(SizeType.Absolute, 58));
        Controls.Add(panel);

        panel.Controls.Add(new Label { Text = "C# / .NET", ForeColor = Color.RoyalBlue, Font = new Font("Segoe UI", 9, FontStyle.Bold), Dock = DockStyle.Fill });
        panel.Controls.Add(new Label { Text = "Calculadora", Font = new Font("Segoe UI", 22, FontStyle.Bold), Dock = DockStyle.Fill });
        panel.Controls.Add(new Label { Text = "Operações básicas, sem complicação.", ForeColor = Color.DimGray, Dock = DockStyle.Fill });
        AddField(panel, "Primeiro número", _first);
        _operation.DropDownStyle = ComboBoxStyle.DropDownList;
        _operation.Items.AddRange(["Adição (+)", "Subtração (−)", "Multiplicação (×)", "Divisão (÷)"]);
        _operation.SelectedIndex = 0;
        AddField(panel, "Operação", _operation);
        AddField(panel, "Segundo número", _second);
        var button = new Button { Text = "Calcular", Dock = DockStyle.Fill, BackColor = Color.RoyalBlue, ForeColor = Color.White, FlatStyle = FlatStyle.Flat };
        button.Click += (_, _) => Calculate();
        panel.Controls.Add(button);
        _result.Text = "O resultado aparece aqui";
        _result.Dock = DockStyle.Fill;
        _result.TextAlign = ContentAlignment.MiddleLeft;
        panel.Controls.Add(_result);
        AcceptButton = button;
    }

    private static void AddField(TableLayoutPanel panel, string label, Control input)
    {
        var container = new Panel { Dock = DockStyle.Fill };
        container.Controls.Add(new Label { Text = label, Dock = DockStyle.Top, Height = 22 });
        input.Dock = DockStyle.Bottom;
        input.Font = new Font("Segoe UI", 11);
        container.Controls.Add(input);
        panel.Controls.Add(container);
    }

    private void Calculate()
    {
        if (!TryRead(_first.Text, out var a) || !TryRead(_second.Text, out var b))
        {
            ShowError("Digite números válidos nos dois campos.");
            return;
        }

        try
        {
            var value = _operation.SelectedIndex switch
            {
                0 => Calc.Add(a, b),
                1 => Calc.Subtract(a, b),
                2 => Calc.Multiply(a, b),
                _ => Calc.Divide(a, b),
            };
            _result.Text = $"Resultado: {value:G12}";
            _result.ForeColor = Color.FromArgb(38, 57, 84);
        }
        catch (DivideByZeroException error)
        {
            ShowError(error.Message);
        }
    }

    private static bool TryRead(string text, out double value) =>
        double.TryParse(text.Trim().Replace(',', '.'), NumberStyles.Float, CultureInfo.InvariantCulture, out value) && double.IsFinite(value);

    private void ShowError(string message)
    {
        _result.Text = message;
        _result.ForeColor = Color.Firebrick;
    }
}
