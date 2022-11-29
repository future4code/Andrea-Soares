import express, { Request, Response } from "express"
import cors from "cors"
import connection from "./dataBase/connection"

const app = express()
app.use(express.json())
app.use(cors())

const getActorById = async (id: string): Promise<void> => {
    const result = await connection.raw(`
    SELECT * FROM Actor 
    WHERE id = "${id}"
    `)
    return result[0]
}
// getActorById("003")
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     });

app.get("/users/:id", async (req: Request, res: Response) => {
    let result
    try {
        const id = req.params.id

        result = await getActorById(id)

        res.send(result)
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: string,
    gender: string
): Promise<void> => {
    await connection
        .insert({
            id: id,
            name: name,
            salary: salary,
            birth_date: dateOfBirth,
            gender: gender,
        })
        .into("Actor");
};

createActor("020", "testandoKenex", 100009, "2022-11-18", "female")
    .then(result => {
        console.log(result)
    }).catch(err => {
        console.log(err);

    })

const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id);
};

updateActor("020", 2)
    .then(result => {
        console.log(`Deu bom ${result}`)
    }).catch(err => {
        console.log(err);

    })

    const deleteActor = async (id: string): Promise<void> => {
        await connection("Actor")
        
          .delete()
          .where("id", id);
      }; 

app.listen(3003, () => {
    console.log("😏 Server is running in http://localhost:3003");

})
