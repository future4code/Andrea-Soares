import React from "react";
import './App.css';
import ListPlaylist from "./components/ListPlaylists/ListPlaylist";
import FormMusic from "./components/FormMusics/FormMusic"
import { ContainerApp, } from "./style"

class App extends React.Component {
  render() {
    return (
      <ContainerApp>
        <div>
          <ListPlaylist />
        </div>
      </ContainerApp>
    );
  }
}

export default App;
