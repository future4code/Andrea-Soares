import React from 'react'
import { useHistory } from 'react-router-dom'

export default function LoginPage() {
    const history = useHistory();

    const gotToTripCreate = () => {
        history.push('/trips/create')
    }

    const goToCandidatsDetails = () => {
        history.push('/trips/details')
    }
    return (
        <div>
            <h1>PÁGINA DE LOGIN</h1> 
            <section>
                <button onClick={ gotToTripCreate }>Criar viagem</button>
                <button onClick={ goToCandidatsDetails }>Candidaturas</button>
            </section>
        </div>
    )
}
