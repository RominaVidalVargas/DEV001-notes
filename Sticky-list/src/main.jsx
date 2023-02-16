import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import Fondo from './Componentes/Home';
import Inicio from './Componentes/Login';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/Inicio',
    element: <Inicio/>,

  },
  {path: '/Fondo',

    element: <Fondo/>},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
      <RouterProvider router={router} />
    </React.StrictMode>,
);
export {router};

