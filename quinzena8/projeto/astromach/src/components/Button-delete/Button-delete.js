import React from 'react';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import { BASE_URL, axiosConfig } from "../../constants/requests";
import axios from "axios";

const ButtonDel = styled.div`
padding: 10px 0;
`

 function OutlinedButtons() {

    const del = () =>{
       axios.put( `${ BASE_URL }clear`, axiosConfig )
       .then(() =>{ 
        
       })
       .catch( error =>{
           alert( error );
       })
   }

   React.useEffect(() => {
       del()
    },[])


  return (
    <ButtonDel >
      <Button onClick = { del } variant="outlined">apagar a bagaça</Button>
    </ButtonDel>
  );
}
export default OutlinedButtons