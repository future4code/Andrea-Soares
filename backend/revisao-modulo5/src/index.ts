import chalk from 'chalk';
import app from "./app"
import createCharacter from './endpoints/createCharacter';
import deleteCharacter from './endpoints/deleteCharacter';
import getAllCharacteres from './endpoints/getAllCharacteres';

const message = chalk.red("ola, backend")
console.log(message);

app.get("/character", getAllCharacteres)
app.put("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)