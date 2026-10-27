# Estratégia de testes

Cada suíte exercita adição, subtração, multiplicação e divisão com valores positivos, negativos, zero e decimais, além de verificar a exceção de divisão por zero. Python usa aproximação para decimais; JavaScript, TypeScript, NUnit, xUnit e PHPUnit também aplicam comparações tolerantes onde configuradas.

Frameworks previstos: Jest, Mocha/Chai e Jasmine para cada uma das linguagens JavaScript e TypeScript; Pytest e unittest para Python; NUnit e xUnit para C#; PHPUnit para PHP. Testes são independentes e executáveis por comandos separados no README.

Jest está configurado para coletar cobertura apenas de `src`. Coverage.py usa branches e aponta para a calculadora Python. Os projetos .NET usam Coverlet Collector; cobertura nos demais frameworks só é reportada se houver instrumentação própria, nunca inferida a partir do número de testes. As interfaces são focadas em interação manual: entradas inválidas, resultados e erro de divisão por zero aparecem na própria tela.
