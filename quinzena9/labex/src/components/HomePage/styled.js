import styled from "styled-components";
import logo from "../../images/logo.png"


// export const ContainerHome = styled.div`
// max-height:100vh;
// `
export const ContanierImage = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center; 
background-image:url(${logo});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
`

export const Content = styled.p`
font-size:30px;
color: #dfdfdf;
font-weight: bold; 
`
export const ContainerButton = styled.div`
position: absolute;
bottom: 150px;
`