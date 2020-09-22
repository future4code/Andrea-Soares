console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// Exercícios de escrita de código
/*
// 1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

a. false
b. false
c. true
d. boolean
*/

/*
// 2.  Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

*/

// Exercícios de escrita de código
/*

1.
let idade = Number(prompt("Qual sua idade?"));
let idadeAmigo = Number(prompt("Amigo(a), qual a sua idade?"));
// console.log(idade, typeof(idade));
// console.log(idadeAmigo typeof(idadeAmigo));

let idadeMaior = idade > idadeAmigo;
console.log(`sua idade é maior do que a do seu amigo? ${idadeMaior}`);
let diferenca = idade - idadeAmigo;
console.log(diferenca);
*/

/*

2.
let numeroPar = Number(prompt("Digite um número par"));
let restoDivisao = numeroPar % 2;
console.log(restoDivisao);
// sempre dá zero como resto da divisão porque não tem resto mesmo

//numero impar o resto será sempre 1 porque é o resto de qualquer numero divido por 2
*/

/*

3.
let listaDeTarefas = [];
let tarefa1 = prompt("Tarefa 1");
let tarefa2 = prompt("Tarefa 2");
let tarefa3 = prompt("Tarefa 3");

listaDeTarefas.push(tarefa1);
listaDeTarefas.push(tarefa2);
listaDeTarefas.push(tarefa3);
console.log(listaDeTarefas);
let indiceTarefa = prompt("Digite numero do indice da tarefa (0, 1 ou 2)");
listaDeTarefas.splice(indiceTarefa, 1);
console.log(listaDeTarefas);
*/

/*

4. 
let nomeUsuario = prompt("Qual seu nome?");
let emailUsuario = prompt("qual seu e-mail?");
console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem vindo(a), ${nomeUsuario}`);
*/


// DESAFIOS

// 1.
let fahrenheit;
let celsius;
//let conversaoKelvin = (fahrenheit -31) * 5 / 9 + 273.15;
//let conversaoFahrenheit = (celsius) * 9 / 5 + 32;

/*
// mostre o valor de 77°F em  K
fahrenheit = 77;
let conversaoKelvin = (fahrenheit -31) * 5 / 9 + 273.15;
console.log(`${conversaoKelvin.toFixed(2)} K`);
*/

/*
// mostre o valor de 80°C em °F,
celsius = 80;
let conversaoFahrenheit = (celsius) * 9 / 5 + 32;
console.log(`${conversaoFahrenheit} F`);
*/

/*
// Calcule e mostre o valor de 30°C em °F e K
celsius = 30;
fahrenheit = (celsius) * 9 / 5 + 32;
let conversaoKelvin = (fahrenheit -31) * 5 / 9 + 273.15;
console.log(`${fahrenheit} F e ${conversaoKelvin.toFixed(2)} K`);
*/

/*
// Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
celsius = Number(prompt("Digite temperatura em Celsius"));
fahrenheit = (celsius) * 9 / 5 + 32;
let conversaoKelvin = (fahrenheit -31) * 5 / 9 + 273.15;
console.log(`${fahrenheit} F e ${conversaoKelvin.toFixed(2)} K`);
*/

// 2.
/*
// Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
// Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto

let consumo = 80;
let valorAPagar = consumo * 0.05;
let desconto = valorAPagar - (valorAPagar * 15 / 100);
console.log(valorAPagar);
console.log(desconto);
*/


//3.
//1 libra = 0,453592 kg
let libra = 20;
let conversorLbParaKg = libra * 0.453592;
console.log(`20lb equivalem a ${conversorLbParaKg}kg`);

// 1 onça = 0.0283495 kg 
let onça =  10.5;
let conversorOzParaKg = onça * 0.0283495;
console.log(`20oz equivalem a ${conversorOzParaKg}kg`);

// 1 milha = 1609.34 m
let milha = 100;
let conversorMiParaM = milha * 1609.34;
console.log(`100mi equivalem a ${conversorMiParaM}m`);

// 1 pé = 0,3048 metro
let pes = 50;
let conversorPesParaM = pes * 0.3048;
console.log(`50ft equivalem a ${conversorPesParaM}m`);

//1 gal = 3,78541 litro
let galao = 103.56;
let conversorGalParaL = galao * 3.78541;
console.log(`103.56gal equivalem a ${conversorGalParaL} litro`);

// 1 xicara = 0.25 litro
let xicara = 450;
let conversorXiParaL = xicara * 0.25;
console.log(`450xi equivalem a ${conversorXiParaL} litro`);

// 1 milha = 1609.34 m
let converterMilha = Number(prompt("Digite um valor em milhas e descubra quantos metros"));
conversorMiParaM = converterMilha * 1609.34;
console.log(`${converterMilha}mi em metros é: ${conversorMiParaM}m`);
