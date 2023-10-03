/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link as ScrollLink } from 'react-scroll';

const Carrusel = ({ heading, message }) => {
  return (
    <div className="relative">
      {/* Fondo del Filtro */}
      <div className="" />

      {/* Carrusel */}
      <Carousel
        autoPlay={false}
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        swipeable={true}
        axis="horizontal"
        emulateTouch={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-[4] px-10 py-96 text-lg sm:px-12 sm:py-14 md:text-xl"
              onClick={onClickHandler}
            ></button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              className="absolute text-sm right-0 top-1/2 transform -translate-y-1/2 z-[4] px-10 py-96  sm:px-10 sm:py-14 md:text-xl"
              onClick={onClickHandler}
            ></button>
          )
        }
      >
        {/* Primera imagen */}
        <div className="relative h-[70vh] lg:h-[70vh] flex justify-center items-center">
          {/* Agregar botón de flecha para bajar */}
          <ScrollLink
            to="abajo" // El ID del elemento al que deseas desplazarte
            smooth={true} // Animación suave
            duration={200} // Duración de la animación en milisegundos
            className="absolute bottom-10 text-5xl text-white hover:text-gray-300 cursor-pointer"
          >
            &#8595;
          </ScrollLink>

          <img
            className="object-cover w-[50%] lg:w-[50%] h-full"
            src="./imagenes_carrusel/vidrios_Carrusel_1.jpg"
            alt="Carousel Slide 1"
          />
          <div className="absolute inset-0 bg-black/30 z-[3]" />
          <div className="absolute p-5  py-8 text-white z-[4] text-center">
            <h2 className="text-3xl md:text-5xl font-bold">{heading}</h2>
            <p className="py-5 text-lg md:text-xl">{message}</p>
          </div>
        </div>
        <div className="relative h-[70vh] lg:h-[70vh] flex justify-center items-center">
          {/* Agregar botón de flecha para bajar */}
          <ScrollLink
            to="abajo" // El ID del elemento al que deseas desplazarte
            smooth={true} // Animación suave
            duration={200} // Duración de la animación en milisegundos
            className="absolute bottom-10 text-5xl text-white hover:text-gray-300 cursor-pointer"
          >
            &#8595;
          </ScrollLink>

          <img
            className="object-cover w-[50%] lg:w-[50%] h-full"
            src="./imagenes_carrusel/vidrios_Carrusel_2.png"
            alt="Carousel Slide 2"
          />
          <div className="absolute inset-0 bg-black/40 z-[3]" />
          <div className="absolute p-5  py-8 text-white z-[4] text-center">
            <h2 className="text-3xl md:text-5xl font-bold">{heading}</h2>
            <p className="py-5 text-lg md:text-xl">{message}</p>
          </div>
        </div>
        <div className="relative h-[70vh] lg:h-[70vh] flex justify-center items-center">
          {/* Agregar botón de flecha para bajar */}
          <ScrollLink
            to="abajo" // El ID del elemento al que deseas desplazarte
            smooth={true} // Animación suave
            duration={200} // Duración de la animación en milisegundos
            className="absolute bottom-10 text-5xl text-white hover:text-gray-300 cursor-pointer"
          >
            &#8595;
          </ScrollLink>

          <img
            className="object-cover w-[50%] lg:w-[50%] h-full"
            src="./imagenes_carrusel/vidrios_Carrusel_3.jpg"
            alt="Carousel Slide 3"
          />
          <div className="absolute inset-0 bg-black/40 z-[3]" />
          <div className="absolute p-5  py-8 text-white z-[4] text-center">
            <h2 className="text-3xl md:text-5xl font-bold">{heading}</h2>
            <p className="py-5 text-lg md:text-xl">{message}</p>
          </div>
        </div>

        {/* ... Otras imágenes aquí ... */}
      </Carousel>

      {/* Elemento al que te desplazarás */}
      <div id="abajo"></div>
    </div>
  );
};

export default Carrusel;
