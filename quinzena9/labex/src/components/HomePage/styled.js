import styled from "styled-components";
import logo from "../../images/logo.png"


export const ContainerHome = styled.div`
max-height:90vh;

`
export const ContanierImage = styled.div`
border: 10px solid black;
width: 100%;
min-height: 90vh;
display: flex;
flex-direction: column;
align-items: center; 
background-image:url(${logo});

background-size: cover;
resize: both; 
`

export const ImgLogo = styled.img`

`