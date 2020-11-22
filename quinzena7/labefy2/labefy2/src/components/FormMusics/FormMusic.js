import axios from "axios";
import React from "react";
import Button from "../Button/Button"
import Input from "../Input/Input";
import { axiosConfig } from "../../constants/requests";

export default class FormMusic extends React.Component {
    state = {
        mostrarInputs: false,
        musicInput: " ",
        artistInput: " ",
        urlInput: " ",

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

    addMusic = (id) => {
        const body = {
            name: this.state.musicInput,
            artist: this.state.artistInput,
            url: this.state.urlInput
        }

        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body, axiosConfig)
            .then(() => {
                alert(`Música ${this.state.musicInput} adicionada`)
            })
            .catch((error) => {
                alert(error)
            })
    }

    mudaSelect = (evento) => {
        const idPlaylist = evento.target.value;        
        this.addMusic(idPlaylist);
        console.log(evento.target.value);
      };
      
    render() {
        return (
            <div className="App">
               
                <p>{this.props.listPlaylistsProps.name}</p>
                <h2>Adicionar Musicas</h2>
                <Button
                    text="Adicionar Música"
                    onClick={this.changeVisibility}
                />

                {this.state.mostrarInputs && (
                    <span>
                        <Input
                            placeholder="Nome Música"
                            onChange={ this.getInputMusic }
                        />
                        <Input
                            placeholder="Artista"
                            onChange={ this.getInputArtist }
                        />
                        <Input
                            placeholder="URL"
                            onChange={ this.getInputUrl }
                        />
                         <div>
                             <h3>Playlists</h3>
                    <select onChange={this.mudaSelect}> 
                        <option value={""}></option>
                        {this.props.listPlaylistsProps.map((play) => {
                            return (
                                <option key={play.name} value={play.id}>
                                    {play.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                    </span>
                )}

            </div>
        );
    }
}