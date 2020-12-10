import React from 'react'; 
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

export default function ListTripsPage() {

    const [listTrips, setListTrips] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/andrea-tang/trips')
        .then((response) =>{
            setListTrips(response.data.trips)
            console.log(response.data.trips);
        })
        .catch((error) =>{
            console.log(error);
        })
    }, []);

    const history = useHistory();
    

    const goToApplication = (ident) => {
        history.push(`/application-form/${ident}`)
        console.log(ident);
    }
    
    return (
        <div>
            <h1>Lista de viagem</h1>
            {listTrips.map((trip) => {
                return(
                <div>
                    <h2>{trip.name}</h2>
                    <p>{trip.description}</p>
                    <button onClick={() => goToApplication(trip.id)}>Inscrição</button>
                </div>
                )
            })}
        </div>
    )
    
}

