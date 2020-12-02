import React from "react";
import axios from "axios";
import {ContainerApp, ContainerCard, FigCard, ContainerButtons, BoxImage, Buttons, ButtonsImg} from "./styled";
import { BASE_URL, axiosConfig } from "../../constants/requests";
import ImageLike from "../../image/029-like.png"
import ImageDislike from "../../image/030-dislike.png"


function Principal() {
    const [infos, setInfos] = React.useState([])
    const [ id, setId] = React.useState("")
    const [ choice, setChoice] = React.useState(false)

    const makeAChoice = () =>{

        setChoice(!choice)
        console.log(id);
        const body = {
            id: id,
            choice: choice
        }
       
        
        axios.post(`${BASE_URL}choose-person`, body, axiosConfig)
        .then((response) => {
            console.log(response);
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    // React.useEffect(() =>{
    //     makeAChoice(id)
    // }, [id])

    
    React.useEffect(() => {
        makeAChoice(id)
        axios.get(`${BASE_URL}person`)
        .then((response) => {
            setInfos(response.data.profile)
            setId(response.data.profile.id)   
        })
        .catch((error) => {
            alert (error)
        })
    }, []);


    return (
        // <ContainerApp>

            <ContainerCard>

                <h1>{`${infos.name}, ${infos.age} anos`}</h1>
                <BoxImage>
                    <FigCard src={infos.photo} alt={`foto de ${infos.name}`} />
                </BoxImage>
                <p>{infos.bio}</p>
                <ContainerButtons>
                    <Buttons onClick= {makeAChoice}>
                        <ButtonsImg src={ImageLike} alt="botão de like" />
                    </Buttons>
                    <Buttons>
                        <ButtonsImg src={ImageDislike} alt="botao de deslike" />
                    </Buttons>
                </ContainerButtons>

            </ContainerCard>

        // </ContainerApp>
    )
}


export default Principal;