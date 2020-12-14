import React from 'react'
import { useHistory } from 'react-router-dom'

export default function LoginPage() {
    const history = useHistory();

    const gotToAdmin = () => {
        history.push('/admin')
    }

   
    return (
        <div>
            <h1>PÁGINA DE LOGIN</h1> 
            <section>
                <button onClick={ gotToAdmin }>Entrar area Admin</button>
               
            </section>
        </div>
    )
}
