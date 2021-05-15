import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App';
import theme from "./themes/dashboardTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import { CarProvider } from "./contexts/CarContext"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CarProvider>
        <App />
      </CarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

