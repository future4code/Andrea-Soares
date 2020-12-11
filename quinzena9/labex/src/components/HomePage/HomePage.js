import React from 'react';
import { ContainerHome, ContanierImage, Content } from "./styled";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

export default function HomePage() {

    const history = useHistory();

    const goToApplicationForm =() => {
    history.push('/trips/list')
  };

    return (
        <ContainerHome>
            
            <ContanierImage>
                <Content>Encontre as melhores viagens espaciais!</Content>
                <Button onClick={ goToApplicationForm }  variant="contained" color="primary">Conheça os destinos</Button>
            </ContanierImage>
        </ContainerHome>
    )
}

