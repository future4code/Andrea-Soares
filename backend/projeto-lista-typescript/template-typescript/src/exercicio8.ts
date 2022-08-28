function test(data1: string, dataHabilitacao: string): boolean {

    let dataAtual = new Date(); 
    let anoAtual =  dataAtual.getFullYear()

    const dataNascimentoFormatada: number = Number(data1.split("/").reverse().join("/").slice(0, 4))
    const dataHabilitcaoFormatada: number = Number(dataHabilitacao.split("/").reverse().join("/").slice(0, 4))
    
    const idade: number = anoAtual - dataNascimentoFormatada
    const idadeHabilitacao: number = anoAtual - dataHabilitcaoFormatada
    
 
    if(idade <= 25 && idadeHabilitacao >=5)return true
    else if(idade >= 26 && idade <=50  && idadeHabilitacao >=10)return true
    else if(idade > 51 && idadeHabilitacao >= 15)return true
    else return false

}

console.log(test("13/05/1997", "13/06/2018"))