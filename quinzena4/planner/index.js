function criarTarefa() {
    const input = document.getElementById("tarefa");
    const valorInput = input.value;
    const diaSemana = document.getElementById("dias-semana");
    const valorDiaSemana = diaSemana.value;
    const dia = document.getElementById(valorDiaSemana);
    const mensagem = "Desatenta(o), esqueceu de preencher a tarefa";
    const hora = document.getElementById("horario");
    const valorHora = hora.value;

    switch (valorDiaSemana) {
        case "domingo":
            if (valorInput !== "") {
                dia.innerHTML += `<li onclick = "riscarItem(this)" >${valorInput} ${valorHora}</li>`
                input.value = "";
            } else {
                alert(mensagem)
            }
            break;
        case "segunda":
            if (valorInput !== "") {
                dia.innerHTML += `<li onclick = "riscarItem(this)" >${valorInput} ${valorHora}</li>`
                input.value = "";
            } else {
                alert(mensagem)
            }
            break;
        case "terca":
            if (valorInput !== "") {
                dia.innerHTML += `<li onclick = "riscarItem(this)" >${valorInput} ${valorHora}</li>`
                input.value = "";
            } else {
                alert(mensagem)
            }
            break;
        case "quarta":
            if (valorInput !== "") {
                dia.innerHTML += `<li onclick = "riscarItem(this)" >${valorInput} ${valorHora}</li>`
                input.value = "";
            } else {
                alert(mensagem)
            }
            break;
        case "quinta":
            if (valorInput !== "") {
                dia.innerHTML += `<li onclick = "riscarItem(this)" >${valorInput} ${valorHora}</li>`
                input.value = "";
            } else {
                alert(mensagem)
            }
            break;
        case "sexta":
            if (valorInput !== "") {
                dia.innerHTML += `<li onclick = "riscarItem(this)" >${valorInput} ${valorHora}</li>`
                input.value = "";
            } else {
                alert(mensagem)
            }
            break;
        case "sexta":
            if (valorInput !== "") {
                dia.innerHTML += `<li onclick = "riscarItem(this)" >${valorInput} ${valorHora}</li>`
                input.value = "";
            } else {
                alert(mensagem)
            }
            break;
        case "sabado":
            if (valorInput !== "") {
                dia.innerHTML += `<li onclick = "riscarItem(this)" >${valorInput} ${valorHora}</li>`
                input.value = "";
            } else {
                alert(mensagem)
            }
            break;
        default:
            break;
    }
}


function riscarItem(item) {
    item.style.textDecoration = "line-through"
}

const botaoLimpar = document.getElementById('btn-limpar')
function limparTarefas(){
    console.log("clicado");
    document.location.reload()
}

