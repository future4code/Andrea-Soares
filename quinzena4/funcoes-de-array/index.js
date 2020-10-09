let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    // AQUI VEM A IMPLEMENTAÇÃO
    despesas.forEach((elemento, index, array) => {
        divDespesas.innerHTML += `<p>valor: R$${elemento.valor} | tipo: ${elemento.tipo} | descrição: ${elemento.descricao}</p>`
    })
}


// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO
    arrDespesas.forEach((elemento, index, array) => {
        if (elemento.tipo === "alimentação") {
            gastoAlimentacao += elemento.valor;
        } 
        if (elemento.tipo === "utilidades") {
            gastoUtilidades += elemento.valor
        }
        if (elemento.tipo === "viagem"){
            gastoViagem += elemento.valor
        }
        gastoTotal = gastoAlimentacao + gastoUtilidades + gastoViagem;
    })

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}


function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}


// TERCEIRO
function filtrarDespesas() {//botão "filtrar"
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)
    

    let despesasFiltradas // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO
    despesasFiltradas = arrDespesas.filter((elemento, index, array) => {
        let valorFiltro = elemento.valor >= valorMin && elemento.valor <= valorMax;//pegando o valor do elemento e deixando entre o valorMin eValorMax
        return elemento.tipo === tipoFiltro && valorFiltro //retorna o tipo desejado dentro dos valores desejados
    })
    if (tipoFiltro !== "" && valorMax !== "" && valorMin !== "" && (valorMin >= 0 && valorMax > 0)) { //validação dos campos do filtro
        imprimirDespesas(despesasFiltradas)
    } else {
        alert("Esqueceu algum dado ou digitou errado, desatento ;)")
    }
}

function filtrarDespesasOrdenadas(){//botao "ordenar"
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)


    let despesasFiltradas // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO
    despesasFiltradas = arrDespesas.filter((elemento, index, array) => {
        let valorFiltro = elemento.valor >= valorMin && elemento.valor <= valorMax;
                return elemento.tipo === tipoFiltro && valorFiltro
        })
    ordenar(despesasFiltradas)
    imprimirDespesas(despesasFiltradas)  
}

function ordenar(param) { //ordenando decrescente 
    param.sort(function (a, b) {
        return b.valor - a.valor;
})
}




// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}