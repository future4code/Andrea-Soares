import styled from "styled-components";
import logo from "../../images/logo.png"


export const ContainerHome = styled.div`
max-height:100vh;

`
export const ContanierImage = styled.div`

width: 100%;
min-height: 95vh;
display: flex;
flex-direction: column;
align-items: center; 
background-image:url(${logo});

background-size: cover;
resize: both; 
`

export const Content = styled.p`
font-size:30px;
color: #dfdfdf;
font-weight: bold; 
`