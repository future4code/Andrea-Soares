import React from "react";
import './App.css';
import Button from "./components/Button/Button"
import FormPlaylist from "./components/Form/FormPlaylist";
import Input from "./components/Input/Input";

class App extends React.Component {
  state = {
    mostrarInput: false
  }

  changeVisibility = () => {
    this.setState({ mostrarInput: !this.state.mostrarInput })
    console.log("ola");
  }

  render(){
    return (
      <div className="App">
       <FormPlaylist />
      </div>
    );
  }
}

export default App;
