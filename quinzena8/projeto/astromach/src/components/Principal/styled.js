import styled from "styled-components";

export const ContainerApp = styled.div`
background-color: #a28daa;
max-height:80vh;
display:flex;
flex-direction:column;
margin: 0 auto;
border-radius: 5px;
align-items:center;
`

export const ContainerCard = styled.section`
border-radius: 10px;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding: 0 15px;
min-height:70vh;
`

export const FigCard = styled.img`
max-width: 100%;
width: 400px;
height:300px;
border-radius: 10px;
`
export const ContainerButtons = styled.div`
width:50%;
display:flex;
justify-content: space-between;
`
export const BoxImage = styled.div`

`
export const ButtonsImg = styled.img`
width: 40px;
border-radius: 10px;
:hover {
    background-color:#ddd;
}
`
export const Buttons = styled.button`
margin-bottom: 3px;
border-radius: 30px;
:hover {
    background-color:#ddd;
}
`
