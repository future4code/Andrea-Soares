console.log("ola");

//Faça um programa para ler o ano atual e o ano de nascimento de uma pessoa. Imprimir uma mensagem que diga se ela poderá ou não votar este ano.

const vote = (yearActual, yearBorn) => {
    let idade = yearActual - yearBorn
    if ( idade >= 18) {
        console.log(`vc tem ${idade} anos e pode votar`);
    }else {
        console.log(`vc tem ${idade} anos e não pode votar`);
    }
}

vote(2021,1979)

//Faça um programa que leia um valor e imprima a mensagem "É maior que 10" se o valor lido for maior que 10, caso contrário imprima "Não é maior que 10"

const biggerThenTen = (numb) => {
    if( numb > 10 ) {
        console.log(`${numb} é maior do que 10`);
    }else {
        console.log(`${numb} é menor que 10`);
    }
}

biggerThenTen(500)

//As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Faça um programa que leia o número de maçãs compradas, calcule e imprima o custo total da compra.

const totalPurchase = (quant) => {
    if (quant >= 12){
        return quant
    }else {
        return quant*1.3
    }
}

console.log(totalPurchase(12));


// calcular a soma de todos os número pares
const array = [20, 3, 9, 10, 55, 144]

let soma = 0
for(numb of array){
    if (numb % 2 ===0) {
        soma += numb
    }
}
console.log(soma);

//Faça um programa para ler dois valores e imprimí-los em ordem crescente. Considere que não serão lidos valores iguais. 

const order = (numb1, numb2) => {
    if (numb1 < numb2){
        return numb1+ ", " +numb2
    }else{
        return numb2+', ' +numb1
    }
}
console.log(order(10054860,22200))


