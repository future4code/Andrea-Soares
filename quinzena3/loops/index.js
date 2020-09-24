// console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// **Exercícios de interpretação de código**

// EXERCÍCIO 1
// Está pegando a variavel valor e acrescentando a condiçao de i dentro de valor, isto é, valor=0+0; valor =0+1; valor= 1+2; valor=3+3; valor= 6+4. 
// Imprimindo o valor 10.

// EXERCÍCIO 2
// a. vai imprimir os numeros maiores do que 18(19,21,23,25,27,30)
//b. usaria o for



/*  APAGAR
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for(let i= 0; i < lista.length; i++) {
		console.log(i);
	}
*/


// EXERCÍCIO 3

// // a.
// const arrayOriginal = [10,1,30,4,50,6,7,8,9,100];
//     for(let i = 0; i < arrayOriginal.length; i++){
//         console.log(arrayOriginal[i]);
//     }

// // // b.
//     // for(let i = 0; i < arrayOriginal.length; i++){
//     //     console.log(arrayOriginal[i]/10);
//     // }

//    // -----OU-----

//     for(let numero of arrayOriginal){
//         console.log(numero/10);
//     }

// // // c.
//     let novoArray = []
//     for (let numero of arrayOriginal) {
//         if (numero % 2 === 0) {
//             novoArray.push(numero)
//         }
//     }
//     console.log(novoArray);
    
// // d. 
//     let arrayStrings = []
//     for (let i = 0; i < arrayOriginal.length; i++) {
//       arrayStrings.push(String(arrayOriginal[i]));
//       console.log(`O elemento do índex ${i} é ${arrayOriginal[i]}`); 
//     }
//     console.log(arrayStrings);

// // e.
// console.log(arrayOriginal);
// let maior = 0;

// for (const numero of arrayOriginal) {
//     if(numero > maior){
//         maior = numero 
//     } 
// }
// menor = maior
// for (const numero of arrayOriginal) {
//     if (numero < menor) {
//         menor = numero
//     }
// }
// console.log(`O maior número é ${maior} e o menor é ${menor}`);


// ********DESAFIOS********

// DESAFIO 1
// 0
// 00
// 000
// 0000

// // DESAFIO 2
// let numeroEscolhido = Number(prompt("Esolha um número de 0 a 10"));
// let escolha = true
// while(escolha)
// {
//     //inicializando o teste da variavel de escolha
//     escolha = numeroEscolhido > 10 || numeroEscolhido < 0
//     if(escolha){
//         numeroEscolhido = Number(prompt("Escolha um número entre 0 e 10, pangaré desatento"));
//     }    
// }

// console.log("Vamos jogar!!");

// let errou = true
// let mensagem = "Chute um número de 0 a 10"
// let tentativas = 0
// while(errou){
//     tentativas++
//     let numeroChutado = Number(prompt(mensagem));
//     console.log(`O Número chutado foi: ${numeroChutado}`);
//     if (numeroChutado > numeroEscolhido){
//         mensagem = "Errou. O número escolhido é menor";
//         console.log(mensagem);
//         errou = true
//     }
//     else if (numeroChutado < numeroEscolhido){
//         mensagem = "Errou. O número escolhido é maior";
//         console.log(mensagem);
//         errou = true
//     }
//     else{
//         console.log("Acertou!!");
//         console.log(`O número de tentativas foi: ${tentativas}`);
//         errou = true
//         break
//     }
// }

// DESAFIO 3
//Mudando a forma de gerar o número a ser adivinhado, onde o computador escolhe o numero apenas mudando a primeira linha
let numeroEscolhido = Math.floor(Math.random() *100 + 1);

let escolha = true
while(escolha){
    //inicializando o teste da variavel de escolha
    escolha = numeroEscolhido > 100 || numeroEscolhido < 0
    if(escolha){
        numeroEscolhido = Number(prompt("Escolha um número entre 0 e 100, pangaré desatento"));
    }    
}
console.log("Vamos jogar!!");

let errou = true
let mensagem = "Chute um número de 0 a 100"
let tentativas = 0
while(errou){
    tentativas++
    let numeroChutado = Number(prompt(mensagem));
    console.log(`O Número chutado foi: ${numeroChutado}`);
    if (numeroChutado > numeroEscolhido){
        mensagem = "Errou. O número escolhido é menor";
        console.log(mensagem);
        errou = true
    }
    else if (numeroChutado < numeroEscolhido){
        mensagem = "Errou. O número escolhido é maior";
        console.log(mensagem);
        errou = true
    }
    else{
        console.log("Acertou!!");
        console.log(`O número de tentativas foi: ${tentativas}`);
        errou = true
        break
    }
}














