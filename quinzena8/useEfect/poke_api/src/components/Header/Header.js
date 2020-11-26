import React from "react";
import {HeaderContainer, PokemonLogo} from "./styled"
import ImgPokemon from "../../images/1200px-International_Pokémon_logo.svg.png"

function Header () {
    return(
        <HeaderContainer>
            <PokemonLogo src = {ImgPokemon} alt = {"Pokemon"} />
        </HeaderContainer>
    )
}

export default Header