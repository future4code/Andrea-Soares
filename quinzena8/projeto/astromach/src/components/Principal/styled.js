import styled from "styled-components";

export const ContainerCard = styled.section`
border-radius: 10px;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding: 0 15px;
min-height:65vh;
width: 90%;
`

export const FigCard = styled.img`
width: 300px;
height:300px;
border-radius: 10px;
`

export const ContainerButtons = styled.div`
width: 300px;
display:flex;
justify-content: space-between;
`

export const BoxImage = styled.div`

`

export const ButtonsImg = styled.img`
width: 40px;
border-radius: 10px;
:hover {
    background-color:#bfbfbf;
}
`

export const Buttons = styled.button`
margin-bottom: 3px;
border-radius: 30px;
border: none;
background-color:#a28daa;
cursor:pointer;
:hover {
    background-color:#bfbfbf;
}
:focus {
    outline:none;
}
`
