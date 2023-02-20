import React from 'react';
import { useNavigate } from "react-router-dom";
import { salirDeCuenta } from '../../Firebase/Dependencias';

function Muro() {
  const navigate = useNavigate();

  const validarClick = () => {
  };
  console.log('Click Publicar');

  const filtro = () => {
    console.log('click filtro');
  };
  const nuevoSticky = () => {
    console.log('click nuevoSticky');
  };

  const cerrar = () => {
    
    salirDeCuenta().then(resolve => {
      navigate('/')
    });
  };
  
  return (
    <div>
      <header>
        <h1>Sticky List</h1>
      </header>
      <nav id="lateral">
        <button onClick={filtro} type="button" id="button">Películas</button>
        <button onClick={filtro} type="button" id="button">Series</button>
        <button onClick={filtro} type="button" id="button">Animé</button>
        <button onClick={filtro} type="button" id="button">Ver Todo</button>
        <input type="image" src="imagenes\nota.png" id="nuevoSticky"
          onClick={nuevoSticky}></input>
        <button onClick={cerrar} type="button"
          id="cerrarSesion">Cerrar Sesion</button>
      </nav>
    </div>
  );
};
export default Muro;