import React from "react";
import axios from "axios";
import {ContainerApp, ContainerCard, FigCard, ContainerButtons, BoxImage, Buttons, ButtonsImg} from "./styled";
import { BASE_URL } from "../../constants/requests";
import ImageLike from "../../image/029-like.png"
import ImageDislike from "../../image/030-dislike.png"


function Principal() {
    const [infos, setInfos] = React.useState([])
    
    React.useEffect(() => {
        axios.get(`${BASE_URL}person`)
        .then((response) => {
            setInfos(response.data.profile)
            
        })
        .catch((error) => {
            alert (error)
        })
    }, []);


    return (
        <ContainerApp>

            <ContainerCard>

                <h1>{`${infos.name}, ${infos.age} anos`}</h1>
                <BoxImage>
                    <FigCard src={infos.photo} alt={`foto de ${infos.name}`} />
                </BoxImage>
                <p>{infos.bio}</p>
                <ContainerButtons>
                    <Buttons>
                        <ButtonsImg src={ImageLike} alt="botão de like" />
                    </Buttons>
                    <Buttons>
                        <ButtonsImg src={ImageDislike} alt="botao de deslike" />
                    </Buttons>
                </ContainerButtons>

            </ContainerCard>

        </ContainerApp>
    )
}

export default Principal;