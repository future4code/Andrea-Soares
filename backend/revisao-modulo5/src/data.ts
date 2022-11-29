import { character, GENDER, movie } from "./types";

export const movies:movie[] = [
    {
        id:1,
        title: "teste", 
        year:2022
    },
    {
        id:2,
        title: "X-men", 
        year:2000
    },
    {
        id:3,
        title: "Deadpool", 
        year:2016
    }
]

export const characters:character[] = [
    {
        id:1,
        name: "Storm",
        gender:GENDER.FEMALE
    },
    {
        id:2,
        name: "Deadpool",
        gender:GENDER.MALE
    },
    {
        id:3,
        name: "Colossus",
        gender:GENDER.MALE
    },{
        id:4,
        name: "Teste",
        gender:GENDER.FEMALE, 
        description: "testando"
    },

]