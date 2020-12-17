import React from 'react';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Buttons, ContainerRestrict} from "./styled"



export default function AppBarApp() {
  const history = useHistory();
  
  const goToHome = () => {
    history.push('/');
  };

  const goToListTrip = () => {
    history.push( '/trips/list' )
  };

  // const goToApplicationForm =() => {
  //   history.push('/application-form')
  // };

  const goToLogin = () => {
    history.push( '/login' )
  }

  const goToAdmin = () => {
    history.push('/admin')
  }
  const [ value, setValue ] = React.useState(0);

  const handleChange = ( event, newValue ) => {
    setValue( newValue );
  };


  return (
    <Buttons >
      <AppBar  position="static">
        <Tabs value={ value } onChange={ handleChange } >
          <Tab onClick={ goToHome } label="Início"  />
          <Tab  onClick={ goToListTrip } label="Viagens"  />

          {/* <ContainerRestrict> */}
          <Tab onClick={ goToLogin } label="Login"  />
          <Tab onClick={ goToAdmin } label="área restrita"  />
          {/* </ContainerRestrict> */}
        </Tabs>
      </AppBar >
      
    </Buttons>
  );
}
