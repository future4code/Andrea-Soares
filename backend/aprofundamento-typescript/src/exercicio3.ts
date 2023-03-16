
type Estatistica ={
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]) :Estatistica {
// CORREÇÃO:
// const numerosOrdenados: number[] = numeros.sort(
//     (a, b) => a - b
// )
    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.log(obterEstatisticas([10, 15, 9]))