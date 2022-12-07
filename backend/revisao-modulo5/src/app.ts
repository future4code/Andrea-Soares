import express, {Express} from "express"
import cors from "cors"
import chalk from "chalk"

const app:Express = express()

app.use(express.json())
app.use(cors())

app.listen(3003,  ()=>{
    console.log(chalk.green("Server ready"));
})

export default app