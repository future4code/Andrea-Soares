function retornaNomeEData(name: string, date: string): string{
   
    const dateFormated: string[] = date.split('/')
    return `“Olá, me chamo ${name}, nasci no dia ${dateFormated[0]}, no mês de ${dateFormated[1]} e ano de ${dateFormated[2]}.`

}
console.log(retornaNomeEData("teste", "11/22/3366"));

