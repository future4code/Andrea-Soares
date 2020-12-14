import React from 'react';
import { ContainerForm, StyledInput, StyledTitle, ContainerPage } from './styled';
import Button from '@material-ui/core/Button';
import { useInput } from '../../hooks/useInput';

export default function CreateTripPage() {

    const [ name, handleName, setName] = useInput();
    const [ age, handleAge, setAge ] = useInput();
    const [ reason, handleReason, setReason ] = useInput();
    const [ profession, handleProfession, setProfession ] = useInput();
    const [ country, handleCountry, setCountry ] = useInput();

    return (
        <ContainerPage>
        <StyledTitle>Nova Viagem</StyledTitle>
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
         <Button  variant="contained" color="primary">Enviar</Button>
     </ContainerPage>
 )
    
}
