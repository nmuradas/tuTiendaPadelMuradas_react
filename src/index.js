import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Message from './Components/Body/Main/Message';

const root = ReactDOM.createRoot(document.getElementById('root'));

const enviarDatos = () => console.log("Datos enviados")

root.render(
  <React.StrictMode>
    <App value='Prototipo de Tu Tienda de Padel' appVs='Version 0.1' enviarDatos={enviarDatos}>
      <Message />
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
