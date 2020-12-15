import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme'
import Header from './components/Header/Header'

function App() {
  const token = localStorage.getItem("token")
  const [buttonName, setButtonName] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header buttonName={buttonName} setButtonName={setButtonName}/>
        <Router setButtonName={setButtonName}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
