import React from 'react';
import { ContainerHome, ContanierImage, Content, ContainerButton } from "./styled";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

export default function HomePage() {

    const history = useHistory();

    const goToApplicationForm =() => {
    history.push( '/trips/list' )
  };

    return (
        // <ContainerHome>
            <ContanierImage>
                <Content>Encontre as melhores viagens espaciais!</Content>
                <ContainerButton>
                    <Button onClick={ goToApplicationForm } size="large" variant="contained" color="primary">Conheça os destinos</Button>
                </ContainerButton>
            </ContanierImage>
        // </ContainerHome>
    )
}

