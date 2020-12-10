import React from 'react';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Buttons} from "./styled"



export default function AppBarApp() {
  const history = useHistory();
  
  const goToHome = () => {
    history.push('/');
  };

  const goToListTrip = () => {
    history.push('/trips/list')
  };

  const goToApplicationForm =() => {
    history.push('/application-form')
  };

  const goToLogin = () => {
    history.push('/login')
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Buttons >
      <AppBar  position="static">
        <Tabs value={ value } onChange={ handleChange } >
          <Tab onClick={ goToHome } label="Início"  />
          <Tab  onClick={ goToListTrip } label="Viagens"  />
          <Tab onClick={ goToApplicationForm } label="Inscrição"  />
          <div>
          <Tab onClick={ goToLogin } label="Login"  />
          </div>
        </Tabs>
      </AppBar >
      
    </Buttons>
  );
}
