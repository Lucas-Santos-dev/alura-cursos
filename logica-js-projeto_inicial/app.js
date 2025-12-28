// //alert cria uma caixa de mensagem no navegador
// alert('Boas vindas ao jogo do número secreto!');

// //variáveis
// let secretNumber = 29;

// //Cria uma caixa de mensagem onde é possível inserir dados
// let chosenNumber = prompt('Escolha um número entre 0 e 100');

// if (secretNumber == chosenNumber){
//     alert('Parabéns, Você acertou!');
//     console.log('Parabéns, o número secreto é ' + secretNumber);
// } else {
//     alert('Você errou!')
// };

// //Desafios
// //Desafio 1: Mostre um alerta com a mensagem "Boas vindas ao nosso site!"
// alert('Boas vindas ao nosso site!');

// //Desafio 2: Declare uma variável chamada name e atribua a ela o valor "Lua."
// let name = "Lua";
// console.log(name);

// //Desafio 3: Crie uma variável chamada idade e atribua a ela o valor 25.
// let idade = 25;
// console.log(idade);

// //Desafio 4: Defina uma variável numberOfSales e atribua a ela o valor 50
// let numberOfSales = 50;
// console.log(numberOfSales);

// //Desafio 5: Defina uma variável availableBalance e atribua o valor 1000
// let availableBalance = 1000;
// console.log(availableBalance);

// //Desafio 6: Exiba um alerta com o texto "Erro! Preencha todos os campos"
// alert('Erro! Preencha todos os campos');

// //Desafio 7: Declare uma variável chamada errorMessage e atribua a ela o valor "Erro! Preencha todos os campos". Agora exiba um alerta com o valor dessa variável
// let errorMessage = "Erro! Preencha todos os campos";
// alert(errorMessage);

// //Desafio 8: Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, pode chamá-la de nome ou adicionar o que desejar
// let nameUser = prompt('Digite aqui o seu nome');

// //Desafio 9: Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
// let age = prompt(nameUser + " Digite aqui a sua idade");

// //Desafio 10: Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
// if (age >= 18) {
//     alert(`${nameUser} você  pode tirar a habilitação`);
// } else {
//     alert('Você é menor de idade');
// };

// Aula 3

// alert('Boas vindas ao jogo do número secreto');
// let secretNumber = 2;

// let chosenNumber;

// let attempts = 1;

// Enquanto chute não for igual ao número secreto
// while (chosenNumber != secretNumber) {
//     chosenNumber = prompt('Escolha um número entre 1 e 10');
//     // Se chosenNumber for igual ao número secreto
//     if (chosenNumber == secretNumber) {
//         alert(`Isso aí! Você descobriu o número secreto ${secretNumber} com ${attempts} tentativas`);
//     } else {
//         if (chosenNumber > secretNumber) {
//             alert(`O número secreto é menor que ${chosenNumber}`);
//         } else {
//             alert(`O número secreto é maior que ${chosenNumber}`);
//         }
//         attempts++;
//     }
// }

// Desafio aula 3

//Desafio 1: Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número
// inicialNumber = 0;

// while(inicialNumber < 10){
//     inicialNumber++;
//     alert(`Número ${inicialNumber}`);
// }

//Desafio 2: Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
// let inicialNumber = 10;

// while(inicialNumber >= 0){
//     alert(`Número ${inicialNumber}`);
//     inicialNumber--;
// }

//Desafio 3: Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
// let chosenNumber = prompt("Escolha um número");

// while(chosenNumber >= 0){
//     alert(`Contagem regressiva ${chosenNumber}`);
//     chosenNumber--;
// }

//Desafio 4: Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
// let chosenNumber = prompt("Escolha um número:");
// let inicialNumber = 0;

// while (chosenNumber >= inicialNumber){
//     alert(`Contagem progressiva ${inicialNumber}`);
//     inicialNumber++;
// };

//----- Aula 4 ----- //

alert('Boas vindas ao jogo do número secreto');
let secretNumber = 2;

let chosenNumber;

let attempts = 1;

//Enquanto chute não for igual ao número secreto
while (chosenNumber != secretNumber) {
    chosenNumber = prompt('Escolha um número entre 1 e 10');
    // Se chosenNumber for igual ao número secreto
    if (chosenNumber == secretNumber) {
        break;
    } else {
        if (chosenNumber > secretNumber) {
            alert(`O número secreto é menor que ${chosenNumber}`);
        } else {
            alert(`O número secreto é maior que ${chosenNumber}`);
        }
        attempts++;
    };
}

if (attempts > 1){
    alert(`Isso aí! Você descobriu o número secreto "${secretNumber}" com ${attempts} tentativas`);
} else {
    alert(`Isso aí! Você descobriu o número secreto "${secretNumber}" com ${attempts} tentativa`);
}
