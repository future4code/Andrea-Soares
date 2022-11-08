import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from 'uuid';
import { AddressInfo } from "net";



type Todo = {
  userId: number,
  id: string,
  title: string,
  completed: boolean
}
type ArrayTodo = Todo[]

const todo: ArrayTodo = [
  {
    userId: 1,
    id: uuidv4(),
    title: "teste",
    completed: true
  },
  {
    userId: 1,
    id: uuidv4(),
    title: "teste2",
    completed: true
  },
  {
    userId: 1,
    id: uuidv4(),
    title: "teste3",
    completed: true
  },
  {
    userId: 1,
    id: uuidv4(),
    title: "backend",
    completed: false
  },
]
const app = express();

app.use(express.json());
app.use(cors())

app.get("/ping", (request, response) => {
  response.send("pong")
})

app.get('/searchtodo', (request, response) => {
  const todoOrNotTodo = request.query.completedSearch
  const checkTodo = todo.filter((task) => {
    if (todoOrNotTodo === "false") {
      return task.completed === false
    } else {
      return task.completed === true
    }
  })
  response.send(checkTodo)
})

app.post('/newtodo', (request, response) => {
  const { title, completed } = request.body

  const newTodo = {
    userId: 1,
    id: uuidv4(),
    title,
    completed
  }
  todo.push(newTodo)
  response.status(201).send(todo)
})



// const server = app.listen(process.env.PORT || 3003, () => {
//   if (server) {
//     const address = server.address() as AddressInfo;
//     console.log(`Server is running in http://localhost:${address.port}`);
//   } else {
//     console.error(`Failure upon starting server.`);
//   }
// });

app.listen(3003, () => {
  console.log("servidor na porta 3003");

})