import React from 'react';
import img from './img/banner.png';
import './App.css';
import './BotonMenu';
import Nav from './Nav';
import Noticias from './Noticias'; 
import Footer from './Footer';


function Menu() {
  const handleButtonClick = (event) => {
    event.preventDefault();
  };

  const buttonStyle = {
    fontWeight: '800',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div className="fondo">
      <img src={img} alt="Banner" className="banner" style={{ width: '100%' }} />
      <Nav /> 
      <Noticias /> 
    </div>
  );
}

export default Menu;
