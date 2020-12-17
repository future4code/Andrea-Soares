import React from 'react';
import { ContainerForm, StyledInput, StyledTitle, ContainerPage } from './styled';
import Button from '@material-ui/core/Button';
import { useInput } from '../../hooks/useInput';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
margin: 10px;
`

export default function ApplicationFormPage() {
    const [ name, handleName, setName] = useInput();
    const [ age, handleAge, setAge ] = useInput();
    const [ reason, handleReason, setReason ] = useInput();
    const [ profession, handleProfession, setProfession ] = useInput();
    const [ country, handleCountry, setCountry ] = useInput();

    const body ={
        name:name,
        age:age,
        applicationText:reason,
        profession:profession,
        country:country
    };

    const pathParams = useParams();
    
    console.log(pathParams.id);
    const register = () => {
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/andrea-tang/trips/${pathParams.id}/apply`, body)
        .then (( response ) => {
            setName()
            setAge()
            setReason()
            setProfession()
            setCountry()
            console.log(response);
            console.log(pathParams.id);
        })
        .catch(( error ) => {
            alert(`Algo deu errado, tente novamente. Erro: ${ error }`);
        })
    }

    const history = useHistory();
    const goBack = () => {
        history.goBack( `/admin `)
    }


    return (
        <ContainerPage>
           <StyledTitle>Candidatura</StyledTitle>
        <ContainerForm>
            <label> <strong> Nome: </strong></label>
            <StyledInput placeholder="Nome" value={ name } onChange={ handleName } type="text" />

            <label> <strong> Idade: </strong> </label>
            <StyledInput placeholder="Idade" value={ age } onChange={ handleAge } type="number" />

            <label> <strong> Motivo para querer ir: </strong> </label>
            <StyledInput placeholder="Motivo" value={ reason } onChange={ handleReason } type="text" />
            
            <label> <strong> Profissão </strong> </label>
            <StyledInput placeholder="Profissão" value={ profession } onChange={ handleProfession } type="" />
           
            <label> <strong> País </strong> </label>
            <StyledInput placeholder="País" value={ country } onChange={ handleCountry } type="text" />
        </ContainerForm>
            <Button onClick = {register} variant="contained" color="primary">Enviar</Button>
            <StyledButton onClick = {goBack} variant="contained" color="primary">Voltar </StyledButton>
        </ContainerPage>
    )
}
