import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Home() {
  return <h2>Inicio</h2>;
}

function Ruta1() {
  return <h2>Ruta 1</h2>;
}

function Ruta2() {
  return <h2>Ruta 2</h2>;
}

function Nav() {
  return (
       <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/ruta1">Ruta 1</Link>
            </li>
            <li>
              <Link to="/ruta2">Ruta 2</Link>
            </li>
          </ul>
        </nav>

  );
}

export default Nav;
