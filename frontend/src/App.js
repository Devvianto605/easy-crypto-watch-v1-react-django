import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { useSelector } from 'react-redux';

import themes from 'themes';
import './App.css';
import AllRoutes from './route';


function App() {
  const customization = useSelector((state) => state.customization);
  
  return ( 
    <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                    <AllRoutes />
            </ThemeProvider>
        </StyledEngineProvider>
  );
}

export default App;
