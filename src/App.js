import './App.css';
import React, {useState} from 'react';
// import Formulario from './components/Formulario';
// import FormHook from './components/FormHook';
// import Ejemplo1 from './components/ejemplo1';
import Contador from './components/contador';

function App() {
  

  return (
    <div className='container mt-5'>  
  
      <h2><Contador inicial={0}/></h2>

    </div>
  );
}

export default App;
