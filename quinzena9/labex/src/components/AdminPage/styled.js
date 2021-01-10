import styled from 'styled-components';

export const ContainerAdminPage = styled.main`
background-color: lightgray;
min-height: 100vh;
display:flex;
flex-direction:column;
align-items:center;
`
export const ContainerSection = styled.section`
display: flex;
flex-direction: column;
align-items:center;
border-top: 5px solid #A68F8F;
width:50em;
margin-bottom: 30px;
padding: 30px 0;
text-transform:uppercase;
`
export const ContainerList = styled.ul`
display:flex;
flex-direction: column;
width: 50em;
border: 2px solid #A68F8F;
border-radius: 5px;
`
export const ItemList = styled.li`
display:flex;
justify-content: flex-end;
width: 100%;
margin: 15px 0;
border-bottom: 1px solid #dfdfdf;
padding-right:30px;
text-transform:uppercase;
`