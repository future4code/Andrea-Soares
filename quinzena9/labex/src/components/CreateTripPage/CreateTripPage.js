import React from 'react';
import { ContainerForm, StyledInput, StyledTitle, ContainerPage } from './styled';
import Button from '@material-ui/core/Button';
import { useInput } from '../../hooks/useInput';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import useProtectedPage from '../../hooks/useProtectedpage' 


export const StyledButton = styled(Button)`
margin: 10px;
`

export default function CreateTripPage() {

    const [ name, handleName, setName] = useInput();
    const [ planet, handlePlanet, setPlanet ] = useInput();
    const [ date, handleDate, setDate ] = useInput();
    const [ description, handleDescription, setDescription ] = useInput();
    const [ durationInDays, handleDurationInDays, setDurationInDays ] = useInput();
    const [ trip, setTrip ] = React.useState([])
   
    useProtectedPage();
    

    const body = {
        name: name,
        planet: planet,
        date: date,
        description: description,
        durationInDays: durationInDays
    }

    const header = {
        headers :{
            auth: localStorage.getItem('token')
        }
    }

    const createTrip = () => {
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/andrea-tang/trips', body, header)

        .then(( response ) => {
            setName()
            setPlanet()
            setDate()
            setDescription()
            setDurationInDays()
            // alert(`A viagem  ${ name } foi criada com sucesso.`)
            setTrip(response.data.trip)
        })

        .catch(( error ) =>{
            alert(`Algo deu errado! Tente novamente. Erro: $ {error }`)
        })
    }

    const history = useHistory();

    const goBack = () => {
        history.goBack( `/admin `)
    }
   
    return (
        <ContainerPage>
        <StyledTitle>Nova Viagem</StyledTitle>
     <ContainerForm>
         <label> <strong> Nome: </strong></label>
         <StyledInput placeholder="Identificação da viagem" value={ name } onChange={ handleName } type="text" />

         <label> <strong> Planeta: </strong> </label>
         <StyledInput placeholder="Planeta da viagem" value={ planet } onChange={ handlePlanet } type="text" />

         <label> <strong> Data: </strong> </label>
         <StyledInput placeholder="Data da viagem" value={ date } onChange={ handleDate } type="date" />
         
         <label> <strong> Descrição </strong> </label>
         <StyledInput placeholder="Descrição da viagem" value={ description } onChange={ handleDescription } type="" />
        
         <label> <strong> Duração </strong> </label>
         <StyledInput placeholder="Número de dias" value={ durationInDays } onChange={ handleDurationInDays } type="number" />
     </ContainerForm>
        <Button onClick = {createTrip} variant="contained" color="primary">Enviar</Button>

            {trip.length !== 0 && <div>
                <h2>Viagem <i>{trip.name}</i> criada com sucesso</h2>
                <p>Planeta: {trip.planet}</p>
                <p>Data: {trip.date}</p>
                <p>Descrição: {trip.description}</p>
                <p>Duração: {trip.durationInDays} dia(s)</p>
            </div>}
            <StyledButton onClick = {goBack} variant="contained" color="primary">Voltar </StyledButton>

        </ContainerPage>
 )
    
}
