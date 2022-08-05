import React from 'react';
//import logo from './logo.svg';
import Navbar from './Components/Body/Header/NavBar';
import Main from './Components/Body/Main/Main';
import Cart from './Components/Body/Main/Cart';
import Title from './Components/Body/Main/Title';
import ItemListContainer from './Components/Body/Main/ItemListContainer';
import ItemDetailContainer from './Components/Body/Main/ItemDetailContainer';
import CustomProvider from './Components/Context/Contexto'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';


//const App= (props) => {
  //const { name } = props
  // funciona de las dos formas
const App= ({ children }) => {


  return (  //al no tener lógica podria sacarle el return, pero prefiero adoptar el hábito de tenerlo
    <div className='App'>
      <BrowserRouter>
        <CustomProvider> 
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting='Brevemente abriremos canchas profesionales de Padel en CABA-ARGENTINA, quedate atento a las novedades' />}/> 
            <Route path="/category/:categoryId" element={<ItemListContainer greeting='Brevemente encontrará todo el listado completo de nuestros productos' />}/> 
            <Route path="/item/:itemId" element={<ItemDetailContainer /> }/> 
            <Route exact path="/cart" element={<Cart />}/> 
          </Routes>
          <Main />  
          <Title productos='Importados y Nacionales'/>   
          {children}
        </CustomProvider> 
      </BrowserRouter>
    </div>
  );
}

export default App;
