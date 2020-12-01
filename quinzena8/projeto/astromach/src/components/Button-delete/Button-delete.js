import React from 'react';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
// import axios from "axios";

const ButtonDel = styled.div`
padding-top: 15px;;
`


 function OutlinedButtons() {
    // const axiosConfig = {
    //     headers:{
    //         "Content-Type": "application/json"
    //     }
    // }
    const del = () =>{
console.log("ola");
    }
  return (
    <ButtonDel >
      <Button onClick = {del} variant="outlined">apagar a bagaça</Button>
    </ButtonDel>
  );
}
export default OutlinedButtons