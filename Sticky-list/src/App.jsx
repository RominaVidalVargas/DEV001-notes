import './App.css';
import React, {Fragment} from 'react';
import Inicio from './Componentes/Login';
import Fondo from './Componentes/Home';

function App() {
  /* const [count, setCount] = useState(0); */

  return (
    <Fragment>
      <Inicio/>
      <Fondo/>
    </Fragment>

  );
}
/* function Apps() {
  return (

  );
} */

export {App};
