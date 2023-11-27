import * as React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar.jsx';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';

export default function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <NavBar />
        <main>
          <Outlet />
        </main>
      </ThemeProvider>
    </React.Fragment>
  )
}