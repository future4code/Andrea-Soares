import React from 'react';
import AppBarApp from "../AppbarApp/AppBarApp";
import { ContainerHome, ContanierImage, Content } from "./styled";


export default function HomePage() {
    return (
        <ContainerHome>
            {/* <AppBarApp /> */}
            <ContanierImage>
                <Content>Encontre as melhores viagens espaciais!</Content>
            </ContanierImage>
        </ContainerHome>
    )
}

