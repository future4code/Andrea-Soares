import styled from "styled-components";

export const List = styled.div`
display:grid;
grid-template-columns: 3fr 1fr 1fr 1fr;
color: white;
`

export const Button = styled.button`
border: 1px solid white;
background-color: black;
color: white;
margin: 5px;
border-radius: 5px;
:hover { background-color : #2b2b2b; } 
`

export const ListsContainer = styled.div`
display:flex;
padding: 5px;
width: 100vw;
box-sizing:border-box;
`

export const Section = styled.section`
width: 30%;
margin: 10px;
border: 1px solid gray;
padding:5px;
height: 94vh;
`

export const Audio = styled.audio`
width: 80%;
`

export const ItemListTrack = styled.li`
margin:25px;
border-bottom: 1px solid white;
padding-bottom: 15px;
`