import React from 'react';
import { useHistory } from 'react-router-dom';


const useProtectedPage = () => {
    const history = useHistory();

    React.useEffect(() => {
        const token = localStorage.getItem('token')
        if( !token ) {
            history.push( '/login' )
        }
    }, [ history ])
};

export default useProtectedPage