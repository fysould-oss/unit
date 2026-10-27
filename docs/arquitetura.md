# Arquitetura

Cada linguagem implementa uma unidade pequena de lógica sem estado, com quatro operações independentes. Interfaces visuais ficam separadas e chamam a lógica correspondente: páginas web locais para JavaScript, TypeScript e PHP; janela Tkinter em Python e Windows Forms em C#/.NET. A validação dos campos ocorre na interface, e a divisão por zero lança uma exceção idiomática que a interface apresenta sem encerrar a aplicação.

As suítes ficam separadas por runtime e framework; C# tem uma biblioteca compartilhada por projetos de teste independentes. Dependências e configurações ficam locais a cada linguagem. Não há dependência de serviços externos em runtime.

Os cálculos usam tipos numéricos de ponto flutuante de cada ambiente. Assim, resultados decimais podem ter a aproximação binária usual; os testes empregam tolerância quando adequado. As APIs recebem números, e a conversão e validação de texto são responsabilidade da interface.
