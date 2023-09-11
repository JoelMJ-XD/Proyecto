import React from 'react';
import BotonMenu from './BotonMenu';

function Nav({ handleButtonClick, buttonStyle }) {
  return (
    <nav className="menu">
      <ul>
        <BotonMenu label="Hoy" onClick={handleButtonClick} style={buttonStyle} />
        <BotonMenu label="Live" onClick={handleButtonClick} style={buttonStyle} />
        <BotonMenu label="Clima" onClick={handleButtonClick} style={buttonStyle} />
        <BotonMenu label="Deportes" onClick={handleButtonClick} style={buttonStyle} />
        <BotonMenu label="LATAM" onClick={handleButtonClick} style={buttonStyle} />
        <BotonMenu label="EE.UU" onClick={handleButtonClick} style={buttonStyle} />
        <BotonMenu label="México" onClick={handleButtonClick} style={buttonStyle} />
        <BotonMenu label="Política" onClick={handleButtonClick} style={buttonStyle} />
        <BotonMenu label="Opinión" onClick={handleButtonClick} style={buttonStyle} />
        <BotonMenu label="Economía" onClick={handleButtonClick} style={buttonStyle} />
        <BotonMenu label="Mundo" onClick={handleButtonClick} style={buttonStyle} />
        <BotonMenu label="Estados" onClick={handleButtonClick} style={buttonStyle} />
        <BotonMenu label="Capital" onClick={handleButtonClick} style={buttonStyle} />
        <BotonMenu label="Sociedad" onClick={handleButtonClick} style={buttonStyle} />
      </ul>
    </nav>
  );
}

export default Nav;
