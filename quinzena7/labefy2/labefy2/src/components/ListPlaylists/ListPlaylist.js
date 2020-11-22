import React from 'react';
import { axiosConfig } from '../../constants/requests';
import axios from "axios"
import { List, Button, ListsContainer, Section, Audio, ItemListTrack } from './styled';
import FormMusic from "../FormMusics/FormMusic"
import FormPlaylist from '../Form/FormPlaylist';

export default class ListPlaylist extends React.Component {
    state = {
        listPlaylists : [],
        listTracks : [], 
        selectedPlaylistId : ""
    }

    componentDidMount = () =>{
        this.getPlaylist()
        this.getTracks()
    }

    getPlaylist = async () => {
        try {
            const apiResponse = await 
            axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", axiosConfig)
           
            this.setState(
                { listPlaylists: apiResponse.data.result.list }) 
            //       idPlaylist: apiResponse.data.result.list.map(
            //           (item) => { return item.id })})
            // console.log(this.state.idPlaylist);
        }catch (error){
            alert (`Erro aqui ${error}`)
        }
    }

    deletePlaylist = (id) => {
        axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, axiosConfig)
        .then(() => {
            this.getPlaylist();
            alert ("Playlist deletada")
        })
        .catch((error) =>{
            alert (error)
        }) 
    }

    
    getTracks = (id) => {
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, axiosConfig)
        .then((response) => {
            this.setState({ listTracks: response.data.result.tracks,
                            selectedPlaylistId: id })
            console.log(response.data)
        })
        .catch((error) =>{
            
        })
    }

    deleteTrack = (id, idTack) => {
        axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks/${idTack}`, axiosConfig)
        .then(() => {
            this.getTracks();
            alert ("Música deletada")
        })
        .catch((error) =>{
            alert (error)
        }) 
    }

    render() {
        
        const renderListTracks = this.state.listTracks.map((track) => {
            return(
                <ItemListTrack>{track.name} - {track.artist}
                    <Button onClick = { () => this.deleteTrack( this.state.selectedPlaylistId, track.id ) }>x</Button>
                    <Audio controls>
                        <source src={track.url} ></source>
                    </Audio>
                </ItemListTrack>
            )
        })

        const renderList = this.state.listPlaylists.map((item) =>{
            return(
                <List key={item.id}>
                    {item.name}
                    <Button onClick = { () => this.getTracks(item.id) }>Detalhes</Button>
                    <Button onClick = { () => this.deletePlaylist(item.id) }>x</Button>
                </List>
            )
        })


        return (
            <ListsContainer>
                <Section>
                <FormPlaylist />
                {renderList}
                </Section>
                <Section>
                <h2>Músicas</h2>
                <ol>
                    {renderListTracks}
                </ol>
                </Section>
                <Section>
                    <FormMusic
                    listPlaylistsProps={this.state.listPlaylists}
                    />
                </Section>
            </ListsContainer>
        )
    }
}


