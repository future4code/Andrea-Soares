import React from "react";
import './App.css';
import FormPlaylist from "./components/Form/FormPlaylist";
import ListPlaylist from "./components/ListPlaylists/ListPlaylist";
import {ContainerApp, BarraLateral, Conteudo} from "./style"

class App extends React.Component {
  render(){
    return (
      <ContainerApp>
        <BarraLateral>
          <FormPlaylist />
          <ListPlaylist />
       </BarraLateral>
       <Conteudo>
         <h1>conteudo</h1> 
       </Conteudo>
      </ContainerApp>
    );
  }
}

export default App;
