import React from "react";
import axios from "axios";
import {Infos, Button, ContainerUsers} from "./style"


class App extends React.Component {
state = {
  list: [],
  name: "",
  email: "",
  showList :false
};

  changeVisibility = () => {
    this.setState({ showList: !this.state.showList})
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
      .then((response) => {
        this.setState({ list: response.data })
      })
      .catch((error) => {
        alert("Erro")
      })
  };


  createUser = () => {
    const body = {
      name: this.state.name,
      email: this.state.email, 
    };

    
    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
        {
          headers: { Authorization: "andrea-soares-tang" }
        }
      )
      .then((response) => {
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
    // const correctScreeen = () => {
    //   if(this.state.showList){
    //     this.state.list.map((user) => {
    //       return <p>{user.name}</p>;
    //     })
    //   }
    // }
    
  return (
    <div className="App">
      <Button onClick ={this.changeVisibility}>
        {this.state.showList ?"Lista de Usuários":"Cadastrar novo Usuário" }
      </Button>
      <Infos>
        <label>Nome:</label>
        <input 
        value={ this.state.name } 
        onChange={ this.onChangeName }
        />
        <label>Email:</label>
        <input 
        value={ this.state.email } 
        onChange={ this.onChangeEmail } 
        />
        <Button onClick = { this.createUser }>SALVAR</Button>
      </Infos>
      <ContainerUsers>
        {/* {correctScreeen} */}
        {this.state.list.map((user) => {
          return <p>{user.name}</p>;
        })}
      </ContainerUsers>  
    </div>
  );
}
}

export default App;
