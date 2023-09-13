import React from 'react';
import img1 from './img/mañanero.jpg';
import img2 from './img/huracan.jpg';
import img3 from './img/brics.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css'; 

function Noticias() {
  const imageStyle = {
    width: '55%', 
  };

  return (
    <div>
      <div className="carousel-container">
        <Carousel showArrows={true} infiniteLoop={true}>
          <div>
            <a href="URL_del_enlace1">
              <img src={img1} alt="Mañanero" style={imageStyle} />
            </a>
          </div>
          <div>
            <a href="URL_del_enlace2">
              <img src={img2} alt="Huracán" style={imageStyle} />
            </a>
          </div>
          <div>
            <a href="URL_del_enlace3">
              <img src={img3} alt="BRICS" style={imageStyle} />
            </a>
          </div>
        </Carousel>
      </div>
      <div className="noticias">
        <h2>Últimas Noticias</h2>
        {[
          {
            titulo: 'Nueva noticia importante',
            fecha: '18 de septiembre de 2023',
            contenido: 'Contenido de la noticia importante...',
          },
          {
            titulo: 'Actualización de la aplicación móvil',
            fecha: '16 de septiembre de 2023',
            contenido: 'Hemos lanzado una actualización para la aplicación móvil con nuevas características.',
          },
          {
            titulo: 'Evento de lanzamiento de productos',
            fecha: '14 de septiembre de 2023',
            contenido: 'Un evento de lanzamiento de productos se llevará a cabo la próxima semana. ¡Regístrate ahora!',
          },
        ].map((noticia, index) => (
          <div className="noticia" key={index}>
            <h3>{noticia.titulo}</h3>
            <p className="fecha">{noticia.fecha}</p>
            <p>{noticia.contenido}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Noticias;
