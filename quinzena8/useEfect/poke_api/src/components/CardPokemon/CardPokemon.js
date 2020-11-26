import axios from 'axios';
import React from 'react';
import {ContainerCard} from "./styled"

function CardPokemon (props) {
    const [ pokemon, setPokemon ] = React.useState({})


    const getInfosPokemon = (pokeName) => {
        console.log(pokeName);
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${ pokeName }`)
        .then(( response ) => {
            setPokemon( response.data )

            console.log(response.data);

        })
        .catch(( error ) => {
            alert('erro aqui',  error )
        })
    }
    
    React.useEffect(() => {
        getInfosPokemon(props.pokemon)
    }, [ props.pokemon, setPokemon ])

    return (
        <ContainerCard>
             {pokemon.sprites && 
                <img 
                src = {pokemon.sprites.front_default} alt = {pokemon.name}>
                </img>
            }
            <p>Nome: <strong>{pokemon.name}</strong></p>
            <p>Peso: <strong>{pokemon.weight}kg</strong></p>
            {pokemon.types && <p>Tipo: <strong>{pokemon.types[0].type.name}</strong></p>}
           
        </ContainerCard>
    )

}

export default CardPokemon
