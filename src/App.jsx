import * as React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { NavBar, Footer } from './components';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';
import Container from '@mui/material/Container';

export default function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
          <NavBar />
          <Outlet />
          <Footer />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  )
}