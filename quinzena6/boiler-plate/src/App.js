import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id:Date.now(),
          texto: "fazer o projeto",
          completa: false
        },
        {
          id:Date.now(),
          texto: "comer banana",
          completa: false
        }
      ],
      inputValue: '',
      filtro: 'pendentes'
    }

  componentDidUpdate() {
    const objetoTarefa = {
      novaTarefa : this.state.tarefas
    }

    const objetoString = JSON.stringify(objetoTarefa)
    localStorage.setItem("tarefa", objetoString)
  };

  componentDidMount() {
    const objetoString = localStorage.getItem("tarefa")
    const objetoDasTarefas = JSON.parse(objetoString)
    localStorage.setItem("tarefa", objetoDasTarefas)
    console.log(objetoDasTarefas.novaTarefa);
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    if (this.state.inputValue === "") {
      alert("Escreva a tarefa, pessoa desatenta")
    } else {

    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    
      const novaListaTarefas = [novaTarefa, ... this.state.tarefas]

      this.setState({ tarefas: novaListaTarefas, inputValue: " " })
    }
  }

  selectTarefa = (id) => {
    const novaListaTarefasCompletas = this.state.tarefas.map((tarefa) => {
      
      if(id === tarefa.id){
        const novaTarefacompleta = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefacompleta
      }else{
        return tarefa
      }
    })
    console.log({novaListaTarefasCompletas});
    this.setState({tarefas: novaListaTarefasCompletas})
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }  
  

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value = { this.state.inputValue } onChange={ this.onChangeInput }/>
          <button onClick = { this.criaTarefa }>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value = {this.state.filter} onChange={this.onChangeFilter}>
            <option value = "">Nenhum</option>
            <option value = "pendentes">Pendentes</option>
            <option value = "completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                { tarefa.texto }
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
