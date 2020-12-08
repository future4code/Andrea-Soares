import React from 'react';
import AppBar from "../Appbar/AppBar";
import {ContainerHome, ContanierImage,} from "./styled";


export default function HomePage() {
    return (
        <ContainerHome>
            <AppBar />
            <ContanierImage>
            {/* <ImgLogo src={Logo} alt="" /> */}
            </ContanierImage>
        </ContainerHome>
    )
}

