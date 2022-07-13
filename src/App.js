import React from 'react';
//import logo from './logo.svg';
import Navbar from './Components/Body/Header/NavBar';
import Main from './Components/Body/Main/Main';
import Input from './Components/Body/Main/Input';
import Title from './Components/Body/Main/Title';
import ItemListContainer from './Components/Body/Main/ItemListContainer';
import ItemDetailContainer from './Components/Body/Main/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

//const App= (props) => {
  //const { name } = props
  // funciona de las dos formas
const App= ({ value,children ,appVs, enviarDatos }) => {
  //data es una variable/atributo del estado de react
  const data = ['Ingrese su nombre', 'Ingrese su apellido']

  return (  //al no tener lógica podria sacarle el return, pero prefiero adoptar el hábito de tenerlo
    <div className='App'>
      <BrowserRouter>
      <Navbar />
      <Main />
      <ItemListContainer greeting='Brevemente encontrará todo el listado completo de nuestros productos' />     
      <ItemDetailContainer /> 
      
      <Title productos='Importados'/>
      <Title productos='Nacionales'/>
      <h1>{value} esta es la {appVs}</h1> 
      {
        data.map((item)=>{
          return(
            <Input key={item} valor={item} />
          )
        })
      }
      <button onClick={enviarDatos}>Enviar tus datos</button>
      {children}
      </BrowserRouter>
    </div>
  );
}

export default App;
