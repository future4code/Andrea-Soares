import React from 'react';
import { axiosConfig } from '../../constants/requests';
import axios from "axios"
import { List } from './styled';

export default class ListPlaylist extends React.Component {
    state = {
        listPlaylists : []
    }

    componentDidMount = () =>{
        this.getPlaylist();
    }

    getPlaylist = async () => {
        try {
            const apiResponse = await 
            axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", axiosConfig)
            console.log(apiResponse.data);
            this.setState({ listPlaylists: apiResponse.data.result.list })
        }catch (error){
            alert (`Erro aqui ${error}`)
        }
    }
    deletePlaylist = (id) => {
        axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, axiosConfig)
        .then(() => {
            this.getPlaylist();
            alert ("musica deletada")
        })
        .catch((error) =>{
            alert (error)
        }) 
    }
    render() {
        const renderList = this.state.listPlaylists.map((item) =>{
            return(
                <List key={item.id}>
                    {item.name}
                    <button>Detalhes</button>
                    <button onClick = { () => this.deletePlaylist(item.id) }>x</button>
                </List>
            )
        })
        return (
            <div>
               {renderList} 
            </div>
        )
    }
}


