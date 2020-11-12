import React from "react";
import axios from "axios";
import styled from "styled-components"

const Infos = styled.div`
border: 1px solid black;
display:flex;
margin: 0 auto;
flex-direction:column;
width: 50%;
align-items:center;
` 
const Press = styled.button`
background-color: #51C4E0;
margin: 10px;
padding: 10px;
color:white;

`

class App extends React.Component {
state = {
  list: [],
  name: "",
  email: ""
};



  componentDidMount = () =>{
    this.listUsers();
  };

  listUsers = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: { Authorization: "andrea-soares-tang" }
        })
      .then((resposta) => {
        this.setState({ list: resposta.data })
      })
      .catch((error) => {
        alert("Erro")
      })
  };


  createUser = () => {
    const body = {
      name: this.state.name,
      email: this.state.email
    };

    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
        {
          headers: { Authorization: "andrea-soares-tang" }
        }
      )
      .then((resposta) => {
        console.log(resposta.data);
        this.listUsers();
        this.setState({ name: "", email: "" })
      })
      .catch((error) => {
        alert("Erro aqui")
      });
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value })
  }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }
  render(){
    
  return (
    <div className="App">
      <button>Mostrar usuários</button>
      <Infos>
        <label>Nome:</label>
        <input 
        value={this.state.name} 
        onChange={this.onChangeName}
        />
        <label>Email:</label>
        <input 
        value={this.state.email} 
        onChange={this.onChangeEmail} 
        />
        <Press onClick = { this.createUser}>SALVAR</Press>
      </Infos>
      {this.state.list.map((user) => {
          return <p>{user.name}</p>;
        })}
    </div>
  );
}
}

export default App;
