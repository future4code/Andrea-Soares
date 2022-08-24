function adicionarTarefa() {
    const novaTarefa = process.argv[2]

    const listaTarefa = ["comprar pão"]
    listaTarefa.push(novaTarefa)
    return console.log(`Tarefa adicionada com sucesso!Tarefas: ${listaTarefa}`); 
}
console.log(adicionarTarefa());