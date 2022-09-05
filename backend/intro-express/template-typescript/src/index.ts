import express, { Request, Response } from 'express'
import cors from "cors"

// DADOS - Exercício 2
type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
}
// DADOS
let users: User[] = [
    {
        "id": 1,
        "name": "teste",
        "phone": "99991111",
        "email": "teste@teste.com",
    },
    {
        "id": 2,
        "name": "teste2",
        "phone": "99991122",
        "email": "teste2@teste.com",
    },
    {
        "id": 3,
        "name": "teste3",
        "phone": "99991331",
        "email": "teste3@teste.com",
    },
]

// SERVIDOR

const app = express()

app.use(cors())
app.use(express.json())


// ENPOINT 
// Exercicio 1
app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Servidor funcionando");
})


// Exercício 3
app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users)
})

// Exercício 4
app.get("/users/search/:id", (req: Request, res: Response) => {
    const id: number = Number(req.params.id)
    const filteredById: User[] = users.filter(user => user.id === id)

    res.status(200).send(filteredById)
})


// Exercicio 5
app.put("/users/edit/:id", (req: Request, res: Response) => {
    const id: number = Number(req.params.id)
    const { phone } = req.body

    const editUserList = users.map(element => {
        if (element.id === id) 
            {return { ...element, phone: phone }} 
        else 
            {return element}
    })

    res.status(200).send(editUserList)
})

// Exercício 6
app.delete("/users/delete/:id", (req: Request, res:Response) => {
    const id: number = Number(req.params.id)
    const index = users.findIndex(user => user.id === id)
    users.splice(index, 1)

    res.status(200).send(users)


})


app.listen(3003, () => console.log("servidor"));
