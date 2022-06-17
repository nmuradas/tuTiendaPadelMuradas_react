import React from 'react';
//import logo from './logo.svg';
import Navbar from './Components/Body/Header/NavBar';
import Main from './Components/Body/Header/Main';

import './App.css';

const App= (props) => {
  const { name } = props
  return (
    <div>
      <Navbar />
      <Main />
      <h1>{name}</h1>
    </div>
  );
}

export default App;
