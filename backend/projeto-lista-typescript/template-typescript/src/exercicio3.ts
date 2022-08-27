enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type Movie = {
    nome: string,
    anoLancamento: number,
    genero: string,
    pontuacao?: number
}

function catalogMovie(name: string, year: number, genre: GENERO, pontuation?: number): Movie {
    const movie: Movie = {
        nome: name,
        anoLancamento: year,
        genero: genre,
        pontuacao: pontuation
    }
    return movie
}

console.log(catalogMovie("te", 22, GENERO.ACAO));
