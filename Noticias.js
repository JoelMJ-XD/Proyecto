import React from 'react';
import img1 from './img/mañanero.jpg';
import img2 from './img/huracan.jpg';
import img3 from './img/brics.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';

function CustomLink({ url, children }) {
  return (
    <a href={url} target="_blank">
      {children}
    </a>
  );
}

function Noticias() {
  const imageStyle = {
    width: '3.125rem',
  };

  return (
    <div>
      <div className="carousel-container">
        <Carousel showArrows={true} infiniteLoop={true}>
          <div>
            <CustomLink url="URL_para_Imagen1">
              <img src={img1} alt="Mañanero" style={imageStyle} />
            </CustomLink>
          </div>
          <div>
            <CustomLink url="URL_para_Imagen2">
              <img src={img2} alt="Huracán" style={imageStyle} />
            </CustomLink>
          </div>
          <div>
            <CustomLink url="URL_para_Imagen3">
              <img src={img3} alt="BRICS" style={imageStyle} />
            </CustomLink>
          </div>
        </Carousel>
      </div>
      <h2 className="grande-verde">Últimas Noticias</h2>
      <div className="noticias">
        <div className="noticia">
          <CustomLink url="URL_para_Noticia1">
            <img src="https://th.bing.com/th?id=OIF.Azm1dfFVsFru7%2bkjeHxRmQ&pid=ImgDet&rs=1" alt="Foto Noticia" style={{ width: '30rem' }} />
          </CustomLink>
          <h3>
            <CustomLink url="URL_para_Noticia1">
              La ampliación del bloque BRICS no le otorga el manejo del 80% de la producción petrolera mundial
            </CustomLink>
          </h3>
          <p>
            La expansión del bloque de los BRICS a 11 países no supone que esta alianza manejará el 80% de la producción de petróleo del mundo...
          </p>
        </div>
        <div className="noticia">
          <CustomLink url="URL_para_Noticia2">
            <img src="https://cdn-3.expansion.mx/dims4/default/46acd9f/2147483647/strip/true/crop/1600x1075+0+0/resize/1800x1209!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F72%2F51%2F7b2d57994f04808b0a57d38f7172%2Fmananera-13-septiembre.jpeg" alt="Foto Noticia 2" style={{ width: '30rem' }} />
          </CustomLink>
          <h3>
            <CustomLink url="URL_para_Noticia2">
              AMLO: no estarán los ministros de la Corte en el Grito; no los invitamos
            </CustomLink>
          </h3>
          <p>
            El presidente Andrés Manuel López Obrador afirmó que los ministros de la Suprema Corte de Justicia de la Nación no estarán invitados a la ceremonia del Grito de Independencia...
          </p>
        </div>
        <div className="noticia">
          <CustomLink url="URL_para_Noticia4">
            <img src="https://images.milenio.com/CR9fHXA_MtgOz79g4Y_txRC0Wqg=/942x532/uploads/media/2023/09/13/huracan-lee-vira-norte-pasara.jpg" alt="Foto Noticia 4" style={{ width: '30rem' }} />
          </CustomLink>
          <h3>
            <CustomLink url="URL_para_Noticia4">
              El extenso huracán Lee sigue generando peligros en la costa este de Estados Unidos
            </CustomLink>
          </h3>
          <p>
            El huracán Lee, de categoría y significativamente más grande, seguirá creciendo a medida que avanza por el Océano Atlántico a lo largo de la costa este de Estados Unidos...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Noticias;
