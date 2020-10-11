// console.log("funcionando");

// // Exercícios de interpretação de código

// // 1.
// Uma função que recebe parametro "valorEmDolar". Pede ao usuario para informar a cotaçaão do dolar. A função retorna o valor em real (multiplicando o valorEmDolar pela cotação).
// a variavel meuDinheiro irá armazenar a conversão de 100 dolares e depois será impressa no console : supondo que a cotaçao do dolar seja, um sonho distante, de R$2, será impresso R$200.A
// --------------------*******------------------------------------
// // 2.
// Segundo a função, devo colocar minhas merrecas em ações hehehe
// A função investeDinheiro recebe dois parametros. O primeiro paramentro irá determinar qual tipo de investimento e o codigo rodara dentro de poupança, renda fixa,cdb e ações. O segundo parâmetro é a quantidade de dinheiro que irei iinvestir. 
// O primeiro console imprimirá 150 em açoes e rtornará 
// "165"
// O segundo console cairá no default do switch case porque o primeiro parametro é tesouro DeviceRotationRate. Será impresso 
// "TIPO DE INVESTIMENTO INFORMADO INCORRETO"
// // ------------------------------*******----------------------------------
// // 3.
// O laço for...of percorrerar o array numeros e pegará os numeros pares e colocorá no array1. Os numeros ímpares cairão no else e e irão para o array2.
// Primeiro console : "Quantidade total de números 14"
// Segundo console : "6"
// Terceiro console : "8"  
//// ------------------------------*******----------------------------------
// // 4. 
// Não sei o que acontece com variavel recebendo "Infinity"
// A princípio o laço retorna numero maior e menor do array percorrido.
// acretido que o numero1, por ser let e poder ser "redefinida" será o menor número do array e numero2 será o maior.
// Primeiro console : "-10"
// Segundo console : "1590"
// ------------------------------*******------------------------------------

// --------Exercícios de Lógica de Programação-------------------
// 1.
// for, for... of e while

// const array = [10, 20, 3, 40, 62, 35, 5, 100]

// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }
// for (const numero of array) {
//     console.log(numero);
// }

// let indice = 0;
// while(indice < array.length){
//     console.log(array[indice]);
//     indice++
// }
// ------------------------------*******------------------------------------
// 2.
// a . false
// b . false
// c . true
// d . true
// d . true
// ------------------------------*******------------------------------------
// 3.
// O código não funciona porque faltou a iteração, o "i++". 
const quantidadeDeNumerosPares = 10

let i = 0;
while(i < quantidadeDeNumerosPares){
    let numerosPares = i*2
  console.log(`${i+1} -> ${numerosPares}`)
  i++
}
// ------------------------------*******------------------------------------
// 4.
function classificarTriangulo (a, b, c){
    if (( a === b) && (b === c)){//Verifica se os lados são iguais
        console.log("Triângulo Equilátero");
    } else if ((a === b) || (a === c) || (b === c)){//verifica 2 lados iguais
        console.log("Triângulo Isósceles");
    }else{//Todos os lados diferentes
        console.log("Triângulo Escaleno");
    }
    return
}
classificarTriangulo(2,4,4)
classificarTriangulo(2,3,4)
classificarTriangulo(2,2,2)
// ------------------------------*******------------------------------------
//5.
function analisarNumeros (num1, num2){
    console.log(`Entrada\n${num1} e ${num2}`);
    if(num1 > num2){ //verifica qual é o maior
        console.log(`O maior é : ${num1}`);
    }else if (num1 < num2) {
        console.log(`O maior é ${num2}`);
    }else{
        console.log(`Os números são iguais`);//verifica se são iguais
    }
   if(num1%num2===0){//Verifica se são divisíveis entre eles
        console.log(`Os números ${num1} e ${num2} são divisíveis entre si`);
    }else{
        console.log(`${num1} não é divisível por ${num2}`);
    }
    let diferenca =0 //Diferença entre os numeros com valor positivo
    if(num1 > num2){
        diferenca = num1 - num2
    }else{
        diferenca = num2 - num1
    }
    console.log(`A diferença entre eles é ${diferenca}`);
}
analisarNumeros(1500,1500)
// ------------------------------*******------------------------------------

// --------------------------Exercícios de Funções--------------------------
//1.
const arrayNumeros = [10, 20, 34, 100, 2, 9]
function analisarArray(array) {
    let maior = 10;
    let menor = 10;
    let segundoMenor = 10;
    let segundoMaior = 10;
    for (const numero of array) {
        if (maior < numero) {
            maior = numero;
        }
        if (menor > numero) {
            menor = numero;
        }
    }
    for (const numero of array) {
        if ((segundoMaior < numero) && (numero !== maior)) {
            segundoMaior = numero;
            }
        if ((segundoMenor > numero) && (numero !== menor)) {
            segundoMenor = numero;
        }
    }
    return console.log(`O segundo maior numero é ${segundoMaior} e o segundo menor número é ${segundoMenor}`); 
}
analisarArray(arrayNumeros); 

// --------------------*******------------------------------------
//7.
/* 
const mensagem = (msg)=>{
   alert(msg);
}
 mensagem("Hello, Labenu!!!");
*/
// ----------------------------*******------------------------------------

// ----------------------Exercícios de Objetos----------------------------
//1.
// Arrays é uma "lista" de dados. Deve ser usado quando os dados da lista são do mesmo tipo.Ex.: lista de nome, idade, endereço.

// Objeto é uma "lista" de dados com um identificador para cada "tipo" de dado. Deve ser usado quando a lista contem dados de tipos diferentes.Ex.:lista de dados de um cliente contendo nome, idade, endereço.

// ------------------------------*******------------------------------------
//2.
const criaRetangulo = (lado1, lado2) =>{
    const objetoRetangulo = {
        largura : lado1,
        altura : lado2,
        perimetro : 2 * (lado1 + lado2),
        area : lado1 * lado2
    }
    return objetoRetangulo
}
console.log(criaRetangulo(2,2));
// ------------------------------*******------------------------------------
//3.
const filmeFavorito = {
    titulo : "Titanic",
    ano : 1997,
    diretor : "James Cameron",
    atorAtrizes :["Kate Winslet","Leonardo DiCaprio", "Gloria Stuart", "Billy Zane"],
}
let protagonistas = ""
for (let i = 0; i < filmeFavorito.atorAtrizes.length; i++) {
protagonistas += `${filmeFavorito.atorAtrizes[i]}, ` 
}
console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${protagonistas}`);
// ------------------------------*******------------------------------------
//3.
const usuario1 = {
    nome : "bananinha",
    idade : 20,
    email : "bananinha@bananinha.com",
    endereço : "Rua das Bananeiras, 1",
}
const anonimizarPessoa = (objeto) => {
    const usuarioAnonimo ={
        ...objeto,
        nome : "ANÔNIMO",
    }
    return usuarioAnonimo
}

console.log(anonimizarPessoa(usuario1));
// ------------------------------*******------------------------------------
// -------------------Exercícios de Funções de array------------------------
//1.
const arrayEx = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 }
]

//----------------------------------a.-------------------------------------
//retornar um novo array contendo só os maiores de 20 anos
const novoArrayMaiores = arrayEx.filter((elemento, indice, array) => {
    return elemento.idade >= 20;
})
console.log(novoArrayMaiores);
//----------------------------------b.-------------------------------------
//retornar um novo array só com os menores de 20 anos
const novoArrayMenores = arrayEx.filter((elemento, indice, array) =>{
    return elemento.idade < 20;
})
console.log(novoArrayMenores);
// ------------------------------*******------------------------------------
//2.
//----------------------------------a.-------------------------------------
//Retonrar novo array com as entradas multiplicadas por 2
const array = [1, 2, 3, 4, 5, 6]
const arrayVezesDois = array.map((elemento, indice, array) =>{
     return elemento = elemento * 2
})
console.log(arrayVezesDois);
//----------------------------------b.-------------------------------------
//multiplicar por 3 e retornar string
const arrayPorTresString = array.map((elemento, indice, array) =>{
    return `${elemento = elemento * 3}`
})
console.log(arrayPorTresString);
//----------------------------------c.-------------------------------------
const arrayImparPar = array.map((elemento, indice, array) =>{ 
    if(elemento % 2 === 0){
       return`${elemento} é par`
    }else{
        return `${elemento} é ímpar`
    }
})
console.log(arrayImparPar);
// ------------------------------*******------------------------------------
//3.
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]
//----------------------------------a.-------------------------------------
//Pessoas autorizadas Entrar no brinquedo tendo mais de 1.5m e idade entre 14 e 60 anos
const pessoasAutorizadas = pessoas.filter((elemento, indice, array) =>{
    return (elemento.altura >= 1.5 && (elemento.idade > 14 && elemento.idade < 60))
})
console.log(pessoasAutorizadas);
//----------------------------------b.-------------------------------------
//Pessoas não autorizadas Entrar no brinquedo tendo mais de 1.5m e idade entre 14 e 60 anos
const pessoasNaoAutorizadas = pessoas.filter((elemento, indice, array) =>{
    return (!(elemento.altura >= 1.5 && (elemento.idade > 14 && elemento.idade < 60)))
})
console.log(pessoasNaoAutorizadas);
// ------------------------------*******------------------------------------
//3.
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const emailsPacientes = consultas.map((elemento, indice, array) =>{
    let genero = ""
    let lembrar = ""
    if(elemento.genero === "masculino"){
        genero = "Sr."
        lembrar = "lembrá-lo"
    }else{
        genero = "Sra."
        lembrar = "lembrá-la"
    }
    if(elemento.cancelada){
      let msg= `Olá, ${ genero } ${ elemento.nome }. Infelizmente, sua consulta marcada para o dia ${ elemento.dataDaConsulta } foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
      return msg
    }else{
       let msg = `Olá, ${ genero } ${ elemento.nome }. Estamos enviando esta mensagem para ${ lembrar } da sua consulta no dia ${ elemento.dataDaConsulta }. Por favor, acuse o recebimento deste e-mail.`
       return msg
    }
})
console.log(emailsPacientes);
// ------------------------------*******------------------------------------
//4.
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizarSaldoTotal(array) {
    for (item of array) {
        let somaCompras = 0
        const compras = item.compras.forEach((elemento, indice, array) => {
            somaCompras += elemento
        })
        item.saldoTotal -= somaCompras
    }   
}

atualizarSaldoTotal(contas)
console.log(contas);