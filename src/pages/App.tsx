import React from 'react';
import Cronometro from '../components/Cronometro';

import Formulario from '../components/Formulario';
import Lista from '../components/Lista/index'

import './style.scss'



function App() {
  return (
    <div className="AppStyle">
      <Formulario/>
      <Lista/>
      <Cronometro/>
    </div>
  );
}

export default App;
