import styled from 'styled-components';
import image from '../../images/espaco.jpg';

export const Image = styled.div`
background-image:url(${image});
min-height: 94vh;
width:100%;
background-repeat:no-repeat;
background-position: center;
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;

`

export const ContainerError = styled.section`
display: flex;
align-items:center;
justify-content:center;
`

export const TitleError = styled.h1`
font-size:100px;
text-align: center;
color:  #32354e;
`
