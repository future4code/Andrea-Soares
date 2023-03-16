//CORREÇÂO: Como boa prática, usar palavra CORES por ser um enum
enum cores{
    BRANCO = "Branco",
    AZUL = "Azul",
    VERDE ="Verde"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: cores
}

const eu :pessoa = {
    nome:"andréa",
    idade:43,
    corFavorita:cores.VERDE
}

console.log(eu);
