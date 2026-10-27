# Resultados da validação

## Ambiente

Node.js v24.16.0, npm executado como `npm.cmd`, Python 3.14.5, .NET SDK 10.0.300 e target .NET 8.0. A política de execução do PowerShell bloqueia `npm.ps1`; `npm.cmd` funcionou. `php` e `composer` não estão instalados/disponíveis neste ambiente.

## Suítes executadas

| Linguagem / framework | Comando executado | Aprovados | Falhas | Situação |
| --- | --- | ---: | ---: | --- |
| JavaScript / Jest | `cd javascript; npm.cmd run test:jest` (também via `npm.cmd test`) | 17 | 0 | Executado |
| JavaScript / Mocha + Chai | `cd javascript; npm.cmd run test:mocha` (também via `npm.cmd test`) | 5 | 0 | Executado |
| JavaScript / Jasmine | `cd javascript; npm.cmd run test:jasmine` (também via `npm.cmd test`) | 5 | 0 | Executado |
| TypeScript / Jest | `cd typescript; npm.cmd run test:jest` (também via `npm.cmd test`) | 17 | 0 | Executado |
| TypeScript / Mocha + Chai | `cd typescript; npm.cmd run test:mocha` (também via `npm.cmd test`) | 5 | 0 | Executado |
| TypeScript / Jasmine | `cd typescript; npm.cmd run test:jasmine` (também via `npm.cmd test`) | 5 | 0 | Executado após compilação da suíte para CommonJS |
| Python / Pytest | `python -m pytest` | 17 | 0 | Executado |
| Python / unittest | `python -m unittest discover -s python/tests -t python -p 'test_*_unittest.py'` | 5 métodos | 0 | Executado |
| C# / NUnit | `dotnet test csharp/Calculator.NUnit.Tests/Calculator.NUnit.Tests.csproj --collect:"XPlat Code Coverage"` | 18 | 0 | Executado |
| C# / xUnit | `dotnet test csharp/Calculator.XUnit.Tests/Calculator.XUnit.Tests.csproj --collect:"XPlat Code Coverage"` | 18 | 0 | Executado |
| PHP / PHPUnit | `cd php; composer test` | — | — | Não executado: PHP e Composer ausentes |

Além dos projetos de teste individuais, `dotnet test csharp/Calculadora.sln` executou NUnit e xUnit: 36 testes aprovados, 0 falhas. `npm.cmd test` executou com sucesso as três suítes em cada runtime JS/TS. A suíte Pytest foi limitada pelo `pytest.ini` a `test_*_pytest.py` para não incorporar os testes unittest.

## Cobertura medida

- JavaScript/Jest: **100%** de linhas e branches da lógica em `src/calculator.js`.
- TypeScript/Jest: **100%** de linhas e branches da lógica em `src/calculator.ts`.
- Python/Pytest: **100%** linhas (10/10) e branches (2/2) de `python/calculator.py`.
- Python/unittest, medido separadamente com Coverage.py: **100%** linhas (10/10) e branches (2/2).
- C#/NUnit e C#/xUnit: cada relatório Coverlet mediu **100%** de linhas (9/9) e branches (2/2) do assembly da calculadora.
- Mocha, Jasmine e PHPUnit: cobertura não configurada/medida; não se infere cobertura pelo número de testes. PHPUnit também não pôde ser executado.

## Verificações adicionais e limitações

`npm.cmd install` concluiu nos dois projetos. A auditoria inicial encontrou 3 avisos transitivos no Mocha; a dependência foi atualizada para Mocha 12 compatível com Node.js 22.12+ e ambas as auditorias finais reportaram zero vulnerabilidades. `npm.cmd exec tsc -- --noEmit -p tsconfig.json` passou. Não há interface textual para entradas inválidas: as APIs recebem valores numéricos, e a validação de texto cabe a uma camada chamadora.

Na primeira rodada, PHPUnit/Python tinham dependências ausentes e houve falhas de descoberta do Jasmine e resolução de nome em xUnit. Pytest-cov foi instalado, descoberta/importação Jasmine e o alias C# foram corrigidos; todas as suítes disponíveis passaram nas rodadas finais. PHP continua pendente por ausência do runtime e Composer. Nenhum percentual de cobertura é declarado para ele.

## Interfaces gráficas

- TypeScript: `npm.cmd run build:ui` compilou a interface sem erros.
- C#: `dotnet build csharp/Calculator.WinForms/Calculator.WinForms.csproj` compilou Windows Forms sem avisos ou erros.
- Python: `python -m py_compile python/ui.py` passou; Tkinter está disponível.
- JavaScript e TypeScript: servidores iniciados nas portas 4173 e 4174, e as páginas locais responderam HTTP 200. As duas abas do navegador foram abertas.
- Python Tkinter e C# Windows Forms foram iniciados nesta sessão.
- PHP possui `php/public/index.php`, mas não pode ser servido ou aberto enquanto PHP/Composer não estiverem instalados.
