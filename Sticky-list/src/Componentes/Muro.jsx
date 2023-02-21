import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    salirDeCuenta().then((resolve) => {
      navigate('/');
    });
  };

  return (
    <div>
      <header>
        <div id="cabeza">
          <p id="userName"> UserName</p>
          <h1 id="titulo">Sticky List</h1>
        </div>
      </header>
      <main>
        <aside id="lateral">
          <button onClick={filtro} type="button" id="button">Películas</button>
          <button onClick={filtro} type="button" id="button">Series</button>
          <button onClick={filtro} type="button" id="button">Animé</button>
          <button onClick={filtro} type="button" id="button">Ver Todo</button>
          <button type='button' id="nuevoSticky"
            onClick={nuevoSticky}>Nuevo Sticky</button>
          <button onClick={cerrar} type="button"
            id="cerrarSesion">Cerrar Sesion</button>
        </aside>
        <div id='contenedorSticky'>
          <div id='sticky'>
            <input type="text" id='titulosticky' placeholder='Título de tu sticky' />
            <textarea id='inputsticky' placeholder='¿Qué quieres recordar?' />
            <button id='publicarpost'>Publicar</button>
          </div>
        </div>

      </main>
    </div>
  );
};
export default Muro;
