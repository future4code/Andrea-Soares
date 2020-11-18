import axios from "axios";
import React from "react";
import Button from "../Button/Button"
import Input from "../Input/Input";
import {axiosConfig} from "../../constants/requests";

export default class FormMusic extends React.Component {
    state = {
        mostrarInputs: false,
        musicInput: " ", 
        artistInput: " ",
        urlInput: " "
    }

    changeVisibility = () => {
        this.setState({ mostrarInputs: !this.state.mostrarInputs })
    }
    getInputMusic = (e) => {
        this.setState({ musicInput: e.target.value })
    }
    getInputArtist = (e) => {
        this.setState({ artistInput: e.target.value })
    }
    getInputUrl = (e) => {
        this.setState({ urlInput: e.target.value })
    }


    addMusic = () =>{
        const body = {
        name: this.state.musicInput,
        artist: this.state.artistInput,
        url: this.state.urlInput
        }
        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, axiosConfig) //colocar o id da playlist na url
            .then(() => {
                alert(`Música ${this.state.musicInput} adicionada`)
            })
            .catch((error) => {
                alert(error)
            }) 
}
    render() {
        return (
            <div className="App">
                <Button
                    text="Adicionar Música"
                    onClick={this.changeVisibility}
                />

                {this.state.mostrarInput && (
                    <span>
                        <Input
                            placeholder="Adicionar Música"
                            onChange={this.getInputMusic}
                        />
                        <Input
                            placeholder="Adicionar Música"
                            onChange={this.getInput}
                        />
                        <Button
                            text="Enviar"
                            onClick = {this.addMusic}
                        />
                    </span>
                )}
                <h2>Musicas</h2>
            </div>
        );
    }
}