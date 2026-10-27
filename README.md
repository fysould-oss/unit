# Calculadora multilínguagem

Projeto didático com adição, subtração, multiplicação e divisão, implementadas em JavaScript, TypeScript, Python, C# e PHP. Todas as versões recebem valores numéricos; divisão por zero lança uma exceção controlada. Cada implementação também possui interface gráfica simples.

## Estrutura

- `javascript/`: implementação JS e suítes Jest, Mocha/Chai e Jasmine.
- `typescript/`: implementação tipada e suítes Jest, Mocha/Chai e Jasmine.
- `python/`: implementação, testes Pytest e unittest.
- `csharp/`: biblioteca .NET e projetos NUnit e xUnit.
- `php/`: classe, PHPUnit e configuração Composer.
- `python/ui.py` e `csharp/Calculator.WinForms/`: interfaces nativas; `index.html` em JS/TS e `php/public/`: interfaces web.
- `docs/`: arquitetura, estratégia de testes e resultados desta execução.
- `launcher_seguro/`: utilitário pré-existente, independente deste projeto.

## Requisitos e instalação

Use Node.js 22.12+ com npm, Python 3.10+, .NET SDK 8+, PHP 8.1+ e Composer 2. Os dois projetos Node instalam dependências localmente:

```bash
cd javascript && npm install
cd ../typescript && npm install
```

Python: `python -m pip install -r python/requirements-dev.txt`. PHP: `cd php && composer install`. O .NET restaura os pacotes com `dotnet test`.

## Executar e testar

```bash
# JavaScript: executa os três frameworks
cd javascript && npm test
# Isoladamente: npm run test:jest | npm run test:mocha | npm run test:jasmine

# TypeScript: executa os três frameworks
cd typescript && npm test
# Isoladamente: npm run test:jest | npm run test:mocha | npm run test:jasmine

# Python, a partir da raiz
python -m pytest
python -m pytest --cov=calculator --cov-branch --cov-report=term-missing
python -m unittest discover -s python/tests -t python -p 'test_*_unittest.py'

# .NET, a partir da raiz
dotnet test csharp/Calculator.NUnit.Tests/Calculator.NUnit.Tests.csproj --collect:"XPlat Code Coverage"
dotnet test csharp/Calculator.XUnit.Tests/Calculator.XUnit.Tests.csproj --collect:"XPlat Code Coverage"

# PHP
cd php && composer test
```

## Uso

Exemplo JavaScript: `require('./javascript/src/calculator').add(2, 3)`. TypeScript exporta `calculator` de `typescript/src/calculator.ts`; Python fornece `add`, `subtract`, `multiply` e `divide` em `python/calculator.py`. C# disponibiliza métodos estáticos em `BasicCalculator.Calculator`; PHP em `BasicCalculator\Calculator`.

As implementações usam ponto flutuante binário (double/float da linguagem); casos decimais são comparados com tolerância nos testes quando pertinente. JavaScript/TypeScript usam `RangeError`, Python `ZeroDivisionError`, C# `DivideByZeroException` e PHP `DivisionByZeroError`. Tipos textuais não fazem parte da API numérica; validação de texto cabe à interface chamadora.

## Interfaces gráficas

Cada implementação inclui campos numéricos, seletor de operação, botão de cálculo e mensagens de validação:

```bash
# Navegador (Node.js 22.12+)
cd javascript && npm start       # http://127.0.0.1:4173
cd typescript && npm start       # http://127.0.0.1:4174

# Janela nativa Tkinter
cd python && python ui.py

# Janela nativa Windows Forms (.NET 8 no Windows)
dotnet run --project csharp/Calculator.WinForms/Calculator.WinForms.csproj

# Aplicação web local PHP
cd php && composer install && php -S 127.0.0.1:8000 -t public
```

Abra `http://127.0.0.1:8000` para a versão PHP enquanto o servidor local estiver rodando.

## Cobertura, IA e limitações

Jest foi configurado para gerar cobertura da implementação correspondente. Coverage.py está configurado para Python. C# e PHPUnit dependem de ferramentas/driver disponíveis no ambiente. A assistência de IA foi usada para implementar, organizar e revisar os arquivos; comandos automatizados e seus resultados estão registrados em [docs/resultados.md](docs/resultados.md). A cobertura informada será apenas a efetivamente medida. Consulte [docs/arquitetura.md](docs/arquitetura.md) e [docs/testes.md](docs/testes.md).
