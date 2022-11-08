function adicionarTarefa() {
    const novaTarefa = process.argv[2]
    const red = '\u001b[31m'

    const listaTarefa = ["comprar pão "]
    listaTarefa.push(novaTarefa)
    // return console.log('\033[31m Tarefa adicionada com sucesso! Tarefas: '+ listaTarefa); 
    return console.log(`${red} Tarefa adicionada com sucesso! Tarefas: ${ listaTarefa}`); 
}
adicionarTarefa();
