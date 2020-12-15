import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useProtectedPage from '../../hooks/useProtectedpage';
import { ContainerDetailspage } from './styled';
import styled from 'styled-components';

export const ContainerCard = styled(Card)`
width: 50%;
border-radius: 5px;
margin:3px;
`


export default function TripDetailsPage() {

    const [ listTrips, setListTrips ] = React.useState([])
    const [ infos, setInfos ] = React.useState({})
    const [ candidate, setCandidate ] = React.useState(false)

    useProtectedPage();

    const pathParams = useParams();

    

    React.useEffect(() => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/andrea-tang/trip/${pathParams.id}`, { 
          headers:{
              auth:localStorage.getItem('token')
            }
        })
        .then((response) => {
            setListTrips( response.data.trip.candidates )
            setInfos( response.data.trip )
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    const aproveCandidate = (id, name) => {
      const body = {
        approve : true
      }
      axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/andrea-tang/trips/${pathParams.id}/candidates/${id}/decide`,body, { 
        headers:{
            auth: localStorage.getItem('token')
          }
      })
      .then((response) => {
        alert(`Candidato(a) ${name} aprovado`)
      })
      .catch((error) =>{
        alert('Algo deu errado. Tente novamente')
      })
    }

    return (
        <ContainerDetailspage>
            <h1>{infos.name}</h1>
        {listTrips.map(( trip ) => {
            return(
                <ContainerCard  variant="outlined">
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Profissão: {trip.profession}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Nome: {trip.name}
                  </Typography>
                  <Typography  color="textSecondary">
                    Idade: {trip.age} anos
                  </Typography>
                  <Typography variant="body2" component="p">
                    Motivação: {trip.applicationText}
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick = { ()=> aproveCandidate ( trip.id ,trip.name) } variant="contained" color="primary" size="small">Aprovar</Button>
                </CardActions>
              </ContainerCard>    
            )
        })}
        </ContainerDetailspage>
    )
}
