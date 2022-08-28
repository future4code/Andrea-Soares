type DadosCliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const dadosCLiente = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function clientesLascados(array: DadosCliente[]): DadosCliente[] {

    const listaSomaDebitos: DadosCliente[] = array.map((cliente: DadosCliente) => {
        let soma = cliente.debitos.reduce((num1: number, num2: number) => num1 + num2, 0)

        const PessoaSaldoAtualizado: DadosCliente = {
            cliente: cliente.cliente,
            saldoTotal: cliente.saldoTotal - soma,
            debitos: []
        }
        return PessoaSaldoAtualizado
    })

    const devedores: DadosCliente[] = listaSomaDebitos.filter((item: DadosCliente) => {
        return item.saldoTotal <= 0
    })
    return devedores

}

console.log(clientesLascados(dadosCLiente))