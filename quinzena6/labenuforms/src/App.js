import React from "react";
import './App.css';
import Passo1 from "./components/Passo1";
import Passo2 from "./components/Passo2";
import Passo3 from "./components/Passo3";
import Passo4 from "./components/Passo4";


export default class App extends React.Component {
  state = {
    etapa: 1,
  }

 irProximaEtapa = () =>{
  this.setState ({etapa: this.state.etapa +1})
 }

  render(){
    const renderizaEtapa = () =>{
      switch (this.state.etapa) {
        case 1:
          return <Passo1 />;
         
        case 2:
          return <Passo2 />;
         
        case 3:
          return <Passo3 />;
          
        case 4:
          return <Passo4 />;
            
        default:
          return <div>Erro, página não encontrada</div>;
      
      }
    }
  return (
    <div className="App">
      {renderizaEtapa()}
      {this.state.etapa < 4 && <button onClick = { this.irProximaEtapa }>Próxima etapa</button>}
    </div>
  );
}
}


