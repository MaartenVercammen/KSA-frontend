import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { transitions, positions, types, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import './css/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider
        template={AlertTemplate}
        position={positions.TOP_CENTER}
        timeout={5000}
        offset="5px"
        transition={transitions.SCALE}
        type={types.INFO}
      >
        <App />
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
