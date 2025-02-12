window.onload = function() {
    // 1. Criar uma variável nome e exibir seu valor
    let nome = prompt("Qual é o seu nome?");
    console.log(nome);

    // 2. Criar variáveis idade e altura e exibir seus valores
    let idade = parseInt(prompt("Qual é a sua idade?"));
    let altura = parseFloat(prompt("Qual é a sua altura?"));
    console.log(idade, altura);

    // 3. Calcular preço com desconto
    let preco = parseFloat(prompt("Digite o preço do produto:"));
    let desconto = 0.2;
    let precoFinal = preco * (1 - desconto);
    console.log(precoFinal);

    // 4. Verificar temperatura
    let temperatura = parseFloat(prompt("Digite a temperatura atual:"));
    console.log(temperatura > 25 ? "Está calor!" : "Está fresco!");

    // 5. Verificar maioridade
    console.log(idade >= 18 ? "Você é maior de idade" : "Você é menor de idade");

    // 6. Verificar situação com base na nota
    let nota = parseFloat(prompt("Digite sua nota (0-10):"));
    if (nota >= 7) {
        console.log("Aprovado");
    } else if (nota >= 5) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }

    // 7. Verificar se dois números são iguais
    let numero1 = parseInt(prompt("Digite o primeiro número:"));
    let numero2 = parseInt(prompt("Digite o segundo número:"));
    console.log(numero1 === numero2 ? "Os números são iguais" : "Os números são diferentes");

    // 8. Exibir mensagem concatenada
    console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`);

    // 9. Loop de 1 a 10
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

    // 10. Loop até o usuário digitar 5
    let numero;
    do {
        numero = parseInt(prompt("Digite um número (5 para sair):"));
    } while (numero !== 5);

    // 11. Tabuada do número 7
    for (let i = 1; i <= 10; i++) {
        console.log(`7 x ${i} = ${7 * i}`);
    }

    // 12. Exibir números pares de 0 a 20
    for (let i = 0; i <= 20; i += 2) {
        console.log(i);
    }

    // 13. Função para calcular área de um círculo
    function calcularAreaCirculo(raio) {
        return Math.PI * Math.pow(raio, 2);
    }
    let raio = parseFloat(prompt("Digite o raio do círculo:"));
    console.log(calcularAreaCirculo(raio));

    // 14. Programa que soma dois números com comentários
    function somar(a, b) {
        // Retorna a soma de dois números
        return a + b;
    }
    let numA = parseFloat(prompt("Digite o primeiro número para soma:"));
    let numB = parseFloat(prompt("Digite o segundo número para soma:"));
    console.log(somar(numA, numB));

    // 15. Refatoração do código para melhor legibilidade
    let num1 = 10;
    let num2 = 20;
    let soma = num1 + num2;
    console.log(soma);
};
