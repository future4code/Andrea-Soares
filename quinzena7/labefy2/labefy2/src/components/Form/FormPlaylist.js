import axios from "axios";
import React from "react";
import Button from "../Button/Button"
import Input from "../Input/Input";
import {axiosConfig} from "../../constants/requests";

export default class FormPlaylist extends React.Component {
    state = {
        mostrarInput: false,
        playlistInput: ""
    }

    changeVisibility = () => {
        this.setState({ mostrarInput: !this.state.mostrarInput })
    }
    getInput = (e) => {
        this.setState({ playlistInput: e.target.value })
    }

    createPlaylist = () =>{
        const body = {
        name: this.state.playlistInput
        }
        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, axiosConfig)
            .then(() => {
                alert(`playlist chamada ${this.state.playlistInput} criada`)
            })
            .catch((error) => {
                alert(error)
            }) 
}
    render() {
        return (
            <div className="App">
                <Button
                    text="Adicionar Playlist"
                    onClick={this.changeVisibility}
                />

                {this.state.mostrarInput && (
                    <span>
                        <Input
                            placeholder="Adicionar Playlist"
                            onChange={this.getInput}
                        />
                        <Button
                            text="Enviar"
                            onClick = {this.createPlaylist}
                        />
                    </span>
                )}
            </div>
        );
    }
}