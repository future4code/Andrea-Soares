import React from 'react';
import { ContainerForm, StyledInput, StyledTitle, ContainerPage } from './styled';
import Button from '@material-ui/core/Button';
import { useInput } from '../../hooks/useInput';
import { useParams } from 'react-router-dom';
import axios from 'axios'


export default function ApplicationFormPage() {
    const [ name, handleName ] = useInput();
    const [ age, handleAge ] = useInput();
    const [ reason, handleReason ] = useInput();
    const [ profession, handleProfession ] = useInput();
    const [ country, handleCountry ] = useInput();

    const body ={
        name:name,
        age:age,
        applicationText:reason,
        profession:profession,
        country:country
    };
console.log(body);// <-------------------------------

    const pathParams = useParams();

    const register =() => {
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/andrea-tang/trips/${ pathParams.id }/apply`,body)
        .then (( response ) => {
            console.log( response );
          
        })
        .catch(( error ) => {
            alert(`Algo deu errado, tente novamente. Erro: ${ error }`);
        })
    }

    React.useEffect(() =>{
     register();
    })

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
        </ContainerPage>
    )
}
