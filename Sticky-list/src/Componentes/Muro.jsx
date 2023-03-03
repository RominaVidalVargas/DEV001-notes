import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {salirDeCuenta, crearDocumento, lectorDatos}
  from '../../Firebase/Dependencias';

function Muro() {
  const navigate = useNavigate();

  const inputInicial = {
    titulo: '',
    publicacion: '',
  };

  const [valorPublicacion, setvalorPublicacion] = useState(inputInicial);
  const [notas, setNotas]= useState([]);
  const controladorInput = (e) => {
    const {name, value} = e.target;
    setvalorPublicacion({...valorPublicacion, [name]: value});
  };

  const nuevoSticky = () => {
    document.getElementById('contenedorSticky').style.display = 'block';
  };

  const clickInputPublicacion = (e) => {
    e.preventDefault();
    /* limpiar input */
    setvalorPublicacion({...inputInicial});
    crearDocumento(valorPublicacion)
        .then((funciona)=>{
          console.log(funciona);
        });
    console.log(valorPublicacion);
  };
  /* fx para renderizar los nuevos stickys */
  useEffect(()=>{
    lectorDatos().then((result)=>{
      console.log(result);
      setNotas(result);
    },
    );
  }, []);

  const filtro = () => {
    console.log('click filtro');
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
            <input name='titulo' type="text" id='titulosticky'
              onChange={controladorInput}
              placeholder='Título de tu sticky' />
            <textarea name='publicacion' id='inputsticky'
              placeholder='¿Qué quieres recordar?'
              onChange={controladorInput} />
            <button onClick={clickInputPublicacion}
              id='publicarpost'>Publicar</button>
          </div>

        </div>
        <div id="contenedorNotas">
          <div id="cuerpoNotas">
            {notas.map((nota) =>(
              <div key={nota.id}>
                <div id="datosNota">
                  <p id="tituloNota">{nota.titulo}</p>
                  <p id="textoNota">{nota.publicacion}</p>
                  <button id="borrar-editar">Borrar</button>
                  <button id="borrar-editar">Editar</button>
                </div>

              </div>
            ))
            }
          </div>
        </div>
      </main>
    </div>
  );
};
export default Muro;
