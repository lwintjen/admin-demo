import React from 'react';
import HomePage from './pages/HomePage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: "#13d183",
      contrastText: "#fff"
    },
    secondary: {
      main: "#fff",
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>

  );
}

export default App;
