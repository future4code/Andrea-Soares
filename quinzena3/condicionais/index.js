console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// EXERCÍCIO 1
// o código solitica um numero a ser digitido pelo usuário e verifica se dividido por DOMRectList, tem resto 0, verificação se o número é par. Sendo par "passou no teste", sendo ímpar " Não passou no teste".


// EXERCÍCIO 2
// a. Usuário escolhe uma fruta e o código "verifica" o valor daquela fruta. 
// b. O preço da fruta Maçã é R$ 2.25
// c. sem o break o programa não no item Pêra e cai no Default:  O preço da fruta Pêra é R$ 5

// EXERCÍCIO 3
// a. Está pedindo para o usuário digitar um número e este númeroe está sendo transformado de string para number
// b.10-->Esse número passou no teste
//  -10--> Admito que joguei no console, e foi bom porque "descobri" algumas coisas sobre escopo. 
// c. retorna que a variavel mensagem não foi declarada. mensagem foi declarada dentro do escopo do bloco do if e foi usada fora do escopo

// **Exercícios de escrita de código**


// EXERCÍCIO 4

/*
const idadeUsuario = Number(prompt("Digite sua idade"));

if (idadeUsuario >= 18){
    console.log("Você pode dirigir")
}else{
    console.log("você não pode dirigir")
}
*/


// EXERCÍCIO 5

/*
const turno = prompt("Digite seu turno com: M (matutino) ou V (vespetino) ou N (noturno").toUpperCase();

if (turno === "M"){
    console.log("Bom dia!");
} else if (turno === "T"){
    console.log("Boa tarde!");
} else if (turno === "N"){
    console.log("Boa noite!");
}else{
    console.log("Digite um turno válido");
}
*/

// EXERCÍCIO 6

/*
const turno = prompt("Digite seu turno com: M (matutino) ou V (vespetino) ou N (noturno").toUpperCase();
switch (turno) {
    case "M":
        console.log("Bom dia!");
        break;
    case "V":
        console.log("Boa tarde!");
        break;
    case "N":
        console.log("Boa noite!");
        break;
    default:
        console.log("Digite um turno válido");
        break;
}
*/

// EXERCÍCIO 6

/*
const generoFilme = prompt("Escolha o gênero do filme").toLowerCase();
const valorIngresso = Number(prompt("Qual o valor do ingresso"));

if(generoFilme === "fantasia" && valorIngresso < 15){
    console.log("Bom filme!");
}else{
    console.log("Escolha outro filme");
}
*/

// DESAFIO 1

/*
const generoFilme = prompt("Escolha o gênero do filme").toLowerCase();
const valorIngresso = Number(prompt("Qual o valor do ingresso"));

if(generoFilme === "fantasia" && valorIngresso < 15){
    const snack = prompt("Qual snack que você quer comprar?");
    console.log("Bom filme!");
    console.log("... com",snack);
}else{
    console.log("Escolha outro filme");
}
*/


// DESAFIO 2

// perguntas ao usuario 
const nomeUsuario = prompt("Digite seu nome");
const tipoDoJogo = prompt("Digite o tipo de jogo: IN (internacional) ou DO (doméstico)").toUpperCase();
const etapaDoJogo = prompt("Digite: SF (semi-final), DT (terceiro lugar) ou FI (final) ").toUpperCase();
const categoria = prompt("Digite a categoria: 1, 2, 3 ou 4");
const quantidadeIngressos = Number(prompt("Quantidade de ingressos"));

// imprimir o nome 
console.log("Nome do cliente: ",nomeUsuario);

// imprimir tipo de jogo 
if(tipoDoJogo === "IN"){
    console.log("Tipo do jogo: Internacional");
}else{
    console.log("Tipo do jogo:  Nacional");
}

// Etapa do jogo 
if(etapaDoJogo === "SF"){
    console.log("Etapa do jogo: Semi-Final");
}else if(etapaDoJogo === "DT"){
    console.log("Etapa do jogo: Decisão de terceiro lugar");
}else if(etapaDoJogo === "FI"){
    console.log("Etapa do jogo: Final");
}else{
    console.log("Digite opção válida");
}

// categoria 
switch (categoria) {
    case "1":
        console.log("Categoria: 1");
        break;
    case "2":
        console.log("Categoria: 2");
        break;
    case "3":
        console.log("Categoria: 3");
        break;
    case "4":
        console.log("Categoria: 4");
        break;
    default:
        break;
}

// Quantidade de ingressos
 console.log("Quantidade de Ingressos:", quantidadeIngressos, "ingressos");

// Valores dos ingressos

// mensagens no programa
let mensagem = "Valor do ingresso: R$ ";
let mensagemTotal = "valor total: R$ "
let mensagemDolar = "Valor do ingresso: U$ ";
let mensagemTotalDolar = " Valor total: U$"

// valores Semi-final
let categoria1Sf = 1.320;
let categoria2Sf = 880;
let categoria3Sf = 550;
let categoria4Sf = 220;

// valores Disputa de terceiro
let categoria1Dt = 660;
let categoria2Dt = 440;
let categoria3Dt = 330;
let categoria4Dt = 170;

// valores fina
let categoria1Fi = 1980;
let categoria2Fi = 1320;
let categoria3Fi = 880;
let categoria4Fi = 330;


// Valor dos ingressos DO, usando if/else
if (tipoDoJogo === "DO" && etapaDoJogo === "SF") {
    if (categoria === "1") {
        console.log();
        console.log(mensagem, categoria1Sf);
        console.log(mensagemTotal, (categoria1Sf * quantidadeIngressos));
    }else if (categoria === "2"){
        console.log(mensagem, categoria2Sf);
        console.log(mensagemTotal, (categoria2Sf * quantidadeIngressos));
    }else if (categoria === "3"){
        console.log(mensagem, categoria3Sf);
        console.log(mensagemTotal, (categoria3Sf * quantidadeIngressos));
    }else{
        console.log(mensagem, categoria4Sf);
        console.log(mensagemTotal, (categoria4Sf * quantidadeIngressos));
    }
}

if (tipoDoJogo === "DO" && etapaDoJogo === "DT") {
    if (categoria === "1") {
        console.log(mensagem, categoria1Dt);
        console.log(mensagemTotal, (categoria1Dt * quantidadeIngressos));
    }else if (categoria === "2"){
        console.log(mensagem, categoria2Dt);
        console.log(mensagemTotal, (categoria2Dt * quantidadeIngressos));
    }else if (categoria === "3"){
        console.log(mensagem, categoria3Dt);
        console.log(mensagemTotal, (categoria3Dt * quantidadeIngressos));
    }else{
        console.log(mensagem, categoria4Dt);
        console.log(mensagemTotal, (categoria4Dt * quantidadeIngressos));
    }
}

if (tipoDoJogo === "DO" && etapaDoJogo === "FI") {
    let mensagem = "Valor do ingresso:";
    if (categoria === "1") {
        console.log(mensagem, categoria1Fi);
        console.log(mensagemTotal, (categoria1Fi * quantidadeIngressos));
    }else if (categoria === "2"){
        console.log(mensagem, categoria2Fi);
        console.log(mensagemTotal, (categoria2Fi * quantidadeIngressos));
    }else if (categoria === "3"){
        console.log(mensagem, categoria3Fi);
        console.log(mensagemTotal, (categoria3Fi * quantidadeIngressos));
    }else{
        console.log(mensagem, categoria4Fi);
        console.log(mensagemTotal, (categoria4Fi * quantidadeIngressos));
    }
}

// Valor dos ingressos IN, usando switch
if (tipoDoJogo === "IN" && etapaDoJogo === "SF") {
    switch (categoria) {
        case "1":
            console.log(mensagemDolar , (categoria1Sf / 4.1).toFixed(2));
            console.log(mensagemTotalDolar ,(categoria1Sf / 4.1).toFixed(2) * quantidadeIngressos);
            break;
        case "2":
            console.log(mensagemDolar + (categoria2Sf / 4.1).toFixed(2));
            console.log(mensagemTotalDolar ,(categoria2Sf / 4.1).toFixed(2) * quantidadeIngressos);
            break;
        case "3":
            console.log(mensagemDolar , (categoria3Sf / 4.1).toFixed(2));
            console.log(mensagemTotalDolar ,(categoria3Sf / 4.1).toFixed(2) * quantidadeIngressos);
            break;
        case "4":
            console.log(mensagemDolar , (categoria4Sf / 4.1).toFixed(2));
            console.log(mensagemTotalDolar ,(categoria4Sf / 4.1).toFixed(2) * quantidadeIngressos);
            break;
        default:
            break;
    }
}

if (tipoDoJogo === "IN" && etapaDoJogo === "DT") {
    switch (categoria) {
        case "1":
            console.log(mensagemDolar , (categoria1Dt / 4.1).toFixed(2));
            console.log(mensagemTotalDolar ,(categoria1Dt / 4.1).toFixed(2) * quantidadeIngressos);
            break;
        case "2":
            console.log(mensagemDolar + (categoria2Dt / 4.1).toFixed(2));
            console.log(mensagemTotalDolar ,(categoria2Dt / 4.1).toFixed(2) * quantidadeIngressos);
            break;
        case "3":
            console.log(mensagemDolar , (categoria3Dt / 4.1).toFixed(2));
            console.log(mensagemTotalDolar ,(categoria3Dt / 4.1).toFixed(2) * quantidadeIngressos);
            break;
        case "4":
            console.log(mensagemDolar , (categoria4Dt / 4.1).toFixed(2));
            console.log(mensagemTotalDolar ,(categoria4Dt / 4.1).toFixed(2) * quantidadeIngressos);
            break;
        default:
            break;
    }
}

if (tipoDoJogo === "IN" && etapaDoJogo === "FI") {
    switch (categoria) {
        case "1":
            console.log(mensagemDolar , (categoria1Fi / 4.1).toFixed(2));
            console.log(mensagemTotalDolar ,(categoria1Fi / 4.1).toFixed(2) * quantidadeIngressos);
            break;
        case "2":
            console.log(mensagemDolar + (categoria2Fi / 4.1).toFixed(2));
            console.log(mensagemTotalDolar ,(categoria2Fi / 4.1).toFixed(2) * quantidadeIngressos);
            break;
        case "3":
            console.log(mensagemDolar , (categoria3Fi / 4.1).toFixed(2));
            console.log(mensagemTotalDolar ,(categoria3Fi / 4.1).toFixed(2) * quantidadeIngressos);
            break;
        case "4":
            console.log(mensagemDolar , (categoria4Fi / 4.1).toFixed(2));
            console.log(mensagemTotalDolar ,(categoria4Fi / 4.1).toFixed(2) * quantidadeIngressos);
            break;
        default:
            break;
    }
}
