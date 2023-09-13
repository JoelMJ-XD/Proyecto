import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Home() {
  return <h2>Inicio</h2>;
}

function Ruta1() {
  return <h2>Ruta 1</h2>;
}

function Ruta2() {
  return <h2>Ruta 2</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <h1>Mi Aplicación React con React Router</h1>

        {/* Botones de navegación */}
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

        {/* Rutas */}
        <Switch>
          <Route path="/ruta1">
            <Ruta1 />
          </Route>
          <Route path="/ruta2">
            <Ruta2 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
