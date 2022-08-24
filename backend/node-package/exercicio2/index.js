function fazerOperacao() {
    const operacao = process.argv[2]
    const numeroUm = Number(process.argv[3])
    const numeroDois = Number(process.argv[4])

    if (operacao === "add") {
        return numeroUm + numeroDois
    } else if (operacao === "sub") {
        return numeroUm - numeroDois
    } else if (operacao === "mult") {
        return numeroUm * numeroDois
    } else if (operacao === "div") {
        return numeroUm / numeroDois
    } else{
        return "algo errado"
    }

}
console.log(fazerOperacao());