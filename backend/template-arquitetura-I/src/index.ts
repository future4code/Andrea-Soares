import { app } from "./app"

import { createTask } from './endpoints/createTask'
import { UserController } from "./controller/UserController"

const userController = new UserController()

app.post('/user', userController.createUser)

// app.post('/task', createTask)


