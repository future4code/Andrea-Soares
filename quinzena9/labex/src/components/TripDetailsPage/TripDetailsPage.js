import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function TripDetailsPage() {

    const [ listTrips, setListTrips ] = React.useState([])
    const [ infos, setInfos ] = React.useState({})

    const history = useHistory();

    const pathParams = useParams();

    console.log(pathParams.id);//<---------------------------------------
    const header = { 
        headers:{
            auth:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVYcEVsdE5RMURTR1duUzNIV3R3IiwiZW1haWwiOiJiYW5hbmluaGFAZ21haWwuY29tLmJyIiwiaWF0IjoxNjA3NDUzODQyfQ.hfQMUVMgbWM70zxDt1Uu0hQysmbBVoE9c3UNK9vjN6c'}
    }

    React.useEffect(() => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/andrea-tang/trip/${pathParams.id}`, header)
        .then((response) => {
            setListTrips(response.data.trip.candidates)
            setInfos(response.data.trip)
            console.log(response.data.trip);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [pathParams.id])

console.log(listTrips);
    return (
        <div>
            <h1>{infos.name}</h1>

        {listTrips.map(( trip ) => {
            return(
                <Card  variant="outlined">
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
                  <Button variant="contained" color="primary" size="small">Rejeitar</Button>
                </CardActions>
              </Card>
               
            )
        })}
           
        </div>
    )
}
