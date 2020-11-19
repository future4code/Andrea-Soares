import styled from "styled-components";

export const AppContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:50vw;
background-color: #f1f1f8;
margin:0 auto;
height:50vh;
border-radius:5px;
`

export const Infos = styled.div`
display:flex;
flex-direction:column;
width: 50%;
align-items:center;
background-color: #D8E4F0;
` 

export const Button = styled.button`
background-color: #51C4E0;
justify-content:center;
width: 200px;
margin: 30px;
padding: 10px;
color:white;
border-radius: 8px;
`

export const ContainerUsers = styled.div`
width: 50%;
background-color:  #D8E4F0;
`

export const InputItem = styled.input`
height: 20px;
`

export const ButtonX = styled.button`
background-color:#D8E4F0;
border:1px solid black;
color:gray;
width:35px;
:hover {
    color:red;
    border: 1px solid red;
}
`

export const UserContainer = styled.div`
border-bottom: 1px solid black;
display: flex;
flex-direction: row;
justify-content: space-between;
margin:5px;
`