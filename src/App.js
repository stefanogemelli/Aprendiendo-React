import './App.css';
import React, {useState} from 'react';
import Formulario from './components/Formulario';
import FormHook from './components/FormHook';

function App() {
  


  return (
    <div className='container mt-5'>  
      <Formulario  />
      <FormHook />
    </div>
  );
}

export default App;
