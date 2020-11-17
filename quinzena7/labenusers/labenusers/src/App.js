import React from "react";
import axios from "axios";
import {Infos, Button, ContainerUsers, AppContainer, InputItem, ButtonX, UserContainer} from "./style"
import { BASE_URL, axiosConfig } from "./constants/requests";

class App extends React.Component {
state = {
  list: [],
  name: "",
  email: "",
  showList :true
};

  changeVisibility = () => {
    this.setState({ showList: !this.state.showList})
  };

  componentDidMount = () =>{
    this.listUsers();
  };

  listUsers = () => {
    axios
      .get(BASE_URL, axiosConfig)
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
      .post(BASE_URL, body, axiosConfig)
      .then((response) => {
        alert(`O usuário ${this.state.name} foi cadastrado`)
        this.listUsers();
        this.setState({ name: "", email: "" })
      })
      .catch((error) => {
        alert(`Algo deu errado, ${error}`)
      });
  };

  deleteUser = (id) =>{
    axios
      .delete(`${BASE_URL}/${id}`, axiosConfig)
      .then(() =>{
        this.listUsers();
        alert("Usuário sendo deletado")
      })
      .catch((error) =>{
        alert(error)
      })
  }

  onChangeName = (event) => {
    this.setState({ name: event.target.value })
  }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  render(){
  
  return (
    <AppContainer>
      <h2>CADASTRO DE NOVO USUÁRIO</h2>
      <Button onClick ={this.changeVisibility}>
        {this.state.showList ?"Mostrar lista de Usuários":"Cadastrar novo Usuário" }
      </Button>
        {this.state.showList ? 
      <Infos>
        <label>Nome:</label>
        <InputItem
        value={ this.state.name } 
        onChange={ this.onChangeName }
        />
        <label>Email:</label>
        <InputItem 
        value={ this.state.email } 
        onChange={ this.onChangeEmail } 
        />
        <Button onClick = { this.createUser }>SALVAR</Button>
      </Infos> :
      <ContainerUsers>
        {this.state.list.map((user) => {
          return <UserContainer>
            {user.name} 
            <ButtonX onClick = {() => this.deleteUser(user.id)}>x</ButtonX>
          </UserContainer>;
        })}
      </ContainerUsers>  
      }
    </AppContainer>
  );
}
}

export default App;
