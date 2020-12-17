import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ContainerListTrip, ContainerCard, Title } from './styled';
import styled from 'styled-components';

const ButtonList = styled( Button )`
margin: 10px;
`
export default function ListTripsPage() {

    const [ listTrips, setListTrips ] = React.useState([]);

    React.useEffect(() => {
        axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/andrea-tang/trips')
            .then(( response ) => {
                setListTrips( response.data.trips )
            })
            .catch(( error ) => {
                console.log( error );
            })
    }, []);

    const history = useHistory();

    const goToApplication = ( ident) => {
        history.push( `/application-form/${ ident } `)
    }

    return (
        <ContainerListTrip>
            <Title>Viagens disponíveis</Title>
            
            { listTrips.map(( trip ) => {
                return (
                    <ContainerCard key ={trip.id}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    { trip.name }
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    { trip.description }
                                </Typography>
                                <Typography color="textSecondary">
                                    Local: { trip.planet }
                                </Typography>
                                <Typography color="textSecondary">
                                    Duração: { trip.durationInDays } dias
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Data prevista: { trip.date }
                                    <br />
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <ButtonList onClick={ () => goToApplication(  trip.id )} variant="contained" color="primary">
                                    Inscrição
                                </ButtonList>
                            </CardActions>
                        </Card>
                    </ContainerCard>
                )
            })}
        </ContainerListTrip>
    );
}

