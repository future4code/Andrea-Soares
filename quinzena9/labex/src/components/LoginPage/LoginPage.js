import React from 'react';
import { useHistory } from 'react-router-dom';
import { ContainerPage, ContainerForm, StyledInput} from './styled';
import { useInput } from '../../hooks/useInput';
import Button from '@material-ui/core/Button';
import axios from 'axios';



export default function LoginPage() {

    const [ password, handlePassword, setPassword ] = useInput()
    const [ email, handleEmail, setEmail ] = useInput()

    const history = useHistory();

    // const gotToAdmin = () => {
    //     history.push('/admin')
    // }

   const body = {
       email: email,
       password: password 
   }
   const gotToAdmin = () => {
   axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/andrea-tang/login', body)
   .then((response) => {
       localStorage.setItem('token', response.data.token)
       history.push('/admin')
       setPassword('')
       setEmail('')
       console.log(response.data.token); //<----------------------------------
   })
   .catch((error) => {
       alert('Algo deu errado. Tente novamente')
   })
}

    return (
        <ContainerPage>
            <h1>PÁGINA DE LOGIN</h1>
            <ContainerForm>

                <label> <strong> E-mail: </strong> </label>
                <StyledInput placeholder="E-mail" value={ email } onChange = { handleEmail } type="email" />
                <label> <strong> Senha: </strong></label>
                <StyledInput placeholder="Senha" value={ password } onChange = { handlePassword } type="password" />
                <Button variant="contained" color="primary" onClick={gotToAdmin}>Entrar area Admin</Button>

            </ContainerForm>
        </ContainerPage>
    )
}
