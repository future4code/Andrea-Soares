import styled from "styled-components";

export const ContainerApp = styled.div`
background-color:  #d7d9df;
width: 100vw;
min-height: 100vh;
justify-content: center;
align-items:center;
text-align: center;
box-sizing: border-box;
border:1px solid white;
`
export const Container = styled.div`
background-color: #a28daa;
min-height:65vh;
display:flex;
flex-direction:column;
margin: 0 auto;
border-radius: 5px;
align-items:center;
`

export const Conteudo = styled.div`
width: 35%;
margin: 0 auto;
min-height: 90vh;
background-color: #a274b4;
`
export const ButtonMatch = styled.button`
margin-bottom: 3px;
border-radius: 30px;
border: none;
:hover {
    background-color:#bfbfbf;
    border:none;
}
`
export const FigButton = styled.img`
width: 40px;
`