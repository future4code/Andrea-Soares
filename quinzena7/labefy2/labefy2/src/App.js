import React from "react";
import './App.css';
import FormPlaylist from "./components/Form/FormPlaylist";
import ListPlaylist from "./components/ListPlaylists/ListPlaylist";
import FormMusic from "./components/FormMusics/FormMusic"
import { ContainerApp, BarraLateral, Conteudo } from "./style"

class App extends React.Component {
  render() {
    return (
      <ContainerApp>
        <div>
          {/* <FormPlaylist /> */}
          <ListPlaylist />
        </div>
        {/* <Conteudo>
          <h1>conteudo</h1>
          <FormMusic />
        </Conteudo> */}
      </ContainerApp>
    );
  }
}

export default App;
