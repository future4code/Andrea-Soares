import React from "react";
import axios from "axios";
import CardPokemon from "./components/CardPokemon/CardPokemon";
import Header from "./components/Header/Header"
import './App.css';
import {ContainerInput, ContainerApp} from "./styled"

function App() {
  const [ pokeList, setPokeList ] = React.useState( [] )
  const [ pokeName, setPokeName ] = React.useState( "" )


console.log(pokeName);



  const onChangeNamePokemon = ( e ) => {
    setPokeName( e.target.value )
  }

  const getPokemons = () => {
    axios
    .get("http://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(( response ) => {
      setPokeList( response.data.results )
    })
    .catch(( error ) => {
      alert( error )
    })
  }

  React.useEffect(() => {
    getPokemons()
  }, [])

  return (
    <ContainerApp >
      <Header />
      <h1>Escolha um Pokemon e saiba mais </h1>
     <ContainerInput onChange = { onChangeNamePokemon }>
      <option value = { "" } key="">Nenhum</option>
      {pokeList.map(( poke ) => {
        return(
          <option
            key = { poke.name } value = { poke.name }> { poke.name }
          </option>
        )
      })}
     </ContainerInput>
      {pokeName && <CardPokemon pokemon = { pokeName } />}
    </ContainerApp>
  );
}

export default App;
