import {Fragment, useState} from 'react';
import './App.css';
import React from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment id="contenedor">
      <h1>Sticky List</h1>
      <img src="/imagenes/logo.png"></img>
      <h2>Bienvenid@!</h2>
      <p>¿Qué historias increíbles has visto últimamente?</p>
      <button type="button">Iniciar sesión con Google</button>

    </Fragment>

  );
}

export default App;
