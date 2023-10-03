import React from 'react';
import Carrusel from '../components/Carrusel';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';

const Work = () => {
  return (
    <div>
      <Carrusel heading='Nuestros Proyectos' message='Descubre nuestros proyectos realizados' />
      <Portfolio />
      <FloatingButton />
      <Footer />
    </div>
  );
};

export default Work;
