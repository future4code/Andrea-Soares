import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import CssBaseline from "@material-ui/core/CssBaseline";
// import HomePage from './components/HomePage/HomePage';
import Router from './router'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#32354e',
    },
    secondary: {
      main: '#898ca9',
    },
  },
});

function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    <div >
    
    </div>
    </ThemeProvider>
  );
}

export default App;
