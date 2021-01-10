import React from 'react';
import { Image, ContainerError, TitleError } from './styled';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

export default function ErrorPage() {

    const history = useHistory();

    function goToHome() {
        history.push('/')
    }

    return (
        <ContainerError>
            <Image>
                <TitleError> 404 </TitleError>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={goToHome}>Voltar para casa 
                </Button>
            </Image>
        </ContainerError>
    )
}
