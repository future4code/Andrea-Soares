// console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// // Exercícios de interpretação de código

// // EXERCÍCIO 1
// a. 10
//    50

// b. 50
// Por ter o return na função, retornaria a execução da função e como o ultimo paramentro passado foi 10, será 10*5... Foi o que escrevi antes. fui fazendo so exercícios e Testei o código, percebi que não funciona assim    

// // EXERCÍCIO 2
// a. Console irá mostrar os nomes contidos no arrayDeNome até o Goli (i<2).
// Darvas
// Goli

// b. 
// Amanda
// Caio

// EXERCÍCIO 3

// Irá percorrer o array, encontrar os numeros pares e multiplica-los por eles mesmos.  

// Nome para a função: 
// exponenciacaoNumerosPares



// Exercícios de escrita de código

// EXERCÍCIO 4

// a. 
// let minhasInfos =() => {

//     return console.log("Eu sou Andréa, tenho 41 anos, moro em São Paulo e sou estudante Labenu");
// }
// minhasInfos(); 

// b. 

let minhasInfos =(array) => {
        if(array[3] ===true){
            console.log(`Eu sou ${array[0]}, tenho ${array[1]} anos, moro em ${array[2]} e sou estudante Labenu`);
        }else{
            console.log(`Eu sou ${array[0]}, tenho ${array[1]} anos, moro em ${array[2]} e não sou estudante Labenu`);
        }
    }

const informacoes = ["Andréa", 41, "São Paulo", true]
minhasInfos(informacoes);

// EXERCÍCIO 5
// a.
let soma = (num1, num2) =>{
    return num1 + num2
} 
console.log(soma(2,5)); 

// b.
let verifica = (num1, num2) =>{
    let retornoBooleano = num1 >= num2
    return retornoBooleano
}
console.log(verifica(50, 965));

// // c.

let repetidorMsg = (msg) =>{
    let i = 1;
    while(i <= 10){
        // console.log(i + msg); 
        console.log(i + mensagem)
        i = i + 1;

    }
        return
    }
    // console.log(repetidorMsg(" Olá, mundo"));
    let mensagem = " Olá, mundo"
    repetidorMsg();
    

// EXERCÍCIO 6
// a. 
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
const tamanhoArray = (array) => {
    let tamanho = array.length
    return tamanho
}
console.log(`O tamanho do array é ${tamanhoArray(array)}`);
// b. 

let numero1 = 110;
const numeroPar = (num1) => {
    if (num1 % 2 === 0) {
        console.log(`O número ${numero1} é par`);
    } else {
        console.log(`O número ${numero1} é ímpar`);
    }
    return
}
numeroPar(numero1);

// c. 
const contandoArrayDePar = (array) => {
    let arrayPar = []
    for (let cada of array) {
        if (cada % 2 === 0) {
            arrayPar.push(cada);
        }
    }
    return console.log("A quantidade de números pares é: " + arrayPar.length)
}
contandoArrayDePar(array)

//d.
const arrayDePares = (array) => {
    for (let cada of array) {
        if (cada % 2 === 0) {
            console.log(`O número ${cada} é par`);
        }
    }
    return
}
arrayDePares(array)

//DESAFIO 1

const recebendoParamento = (parametro) => {
    return parametro
}
let parametro = 41
console.log(recebendoParamento(parametro));

const recebendoDoisParametros = (param1, param2) => {
    let soma = param1 + param2;
    console.log(recebendoParamento(soma));
}

recebendoDoisParametros(10, 20)

//DESAFIO 2

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

const gerandoArrayPar = (array) => {
    let arrayPar = []
    for (let cada of array) {
        if (cada % 2 === 0) {
            arrayPar.push(cada * 2);
        }
    }
    console.log(arrayPar)
    return
}
gerandoArrayPar(numeros)

const retornarIndiceMaiorNumero = (array) => {
    let maior = 0
    for (let cada of array) {
        if (maior < cada) {
            maior = cada
        }
    }
    return maior
}

const retornarIndiceMaiorNumero2 = (array) => {
    let maior = 0
    let maior_indice = -1
    for (let i = 0; i < array.length; i++) {
        if (maior < array[i]) {
            maior = array[i]
            maior_indice = i
        }
    }
    return maior_indice
}
console.log(retornarIndiceMaiorNumero2(numeros))


const reverterArray = (array) => {
    return array.reverse();
}
console.log(reverterArray(numeros));


