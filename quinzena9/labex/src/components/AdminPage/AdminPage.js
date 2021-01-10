import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { ContainerAdminPage, ContainerList, ItemList, ContainerSection } from './styled';
import useProtectedPage from '../../hooks/useProtectedpage';
import styled from 'styled-components';

export const ButtonStyled = styled(Button)`
margin:0 5em;
`
export const ButtonStyledDel = styled(Button)`
background-color: #732F67;
`

export default function AdminPage() {

    const [ listTrips, setListTrips ] = React.useState([]);

    useProtectedPage();


    React.useEffect(() => {
        makeAList()
        deleteTrip()
    }, []);

    const makeAList = () => {
        axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/andrea-tang/trips')
            .then(( response ) => {
                setListTrips( response.data.trips )
                
            })
            .catch(( error ) => {
                console.log( error );
            })
    }

    const history = useHistory();

    const goToTripDetails = ( id ) => {
        history.push(`/trips/details/${ id }`)
    }

    function goToCreatePage(){
        history.push('/trips/create')
    }

    const deleteTrip = ( id ) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/andrea-tang/trips/${ id }`)
        .then(( response ) => {
            // alert( `Viagem apagada` )
            makeAList()
        })
    }

    return (
        <ContainerAdminPage>
            <h1>Area do Administrador </h1>
            <ContainerSection>
                <h2>Cadastrar nova viagem</h2>
                <Button variant="contained" color="primary" onClick={ goToCreatePage }>Criar nova viagem</Button> 
            </ContainerSection>
            <ContainerSection>
                <h2>Detalhes das inscrições</h2>
                <ContainerList>
                    {listTrips.map(( trip ) => {
                        return(
                            <ItemList>{trip.name} 
                            <ButtonStyled variant="contained" color="primary" onClick={ () => goToTripDetails ( trip.id ) }>Candidaturas</ButtonStyled> 
                            <ButtonStyledDel variant="contained" color="primary" onClick={ () => deleteTrip ( trip.id ) }>Deletar</ButtonStyledDel> 
                            </ItemList>
                        )
                    })}
                    </ContainerList>
            </ContainerSection>
           
        </ContainerAdminPage>
    )
}
