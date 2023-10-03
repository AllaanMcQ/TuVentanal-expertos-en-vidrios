/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carrusel = () => {
  return (
    <Carousel
      showArrows={true} // Muestra las flechas de navegación
      showStatus={false} // Oculta el estado (p. ej., 2/5)
      showThumbs={false} // Oculta las miniaturas de las imágenes
      infiniteLoop={true} // Habilita el bucle infinito
      autoPlay={true} // Inicia la reproducción automática
      interval={3000} // Intervalo de cambio de imagen en milisegundos
    >
      <div>
        <img src="/marketing1.png" alt="Imagen 1" />
      </div>
      <div>
        <img src="/marketing2.png" alt="Imagen 2" />
      </div>
      <div>
        <img src="/marketing3.png" alt="Imagen 3" />
      </div>
    </Carousel>
  );
};

export default Carrusel;
