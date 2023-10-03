import React from 'react'
import Carrusel from '../components/Carrusel'
import Email from '../components/Correo';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Instagram from '../components/Instagram';

const work = () => {
  return (
    <div>
        <Carrusel heading='Contacto' message='Baja para informarte mas sobre nosotros y generar una cotizacion' />
        <div className="text-4xl text-center mt-5  shadow-xl text-white bg-gradient-to-r from-yellow-300 to-orange-800 p-4">siguenos en  instagram</div>
      
      <Instagram /> 
      <div className="text-4xl text-center mt-5  shadow-xl text-white bg-gradient-to-r from-yellow-300 to-orange-800 p-4">Para más información o cotización</div>
        <Email/>
        <FloatingButton/>
        <Footer />

    </div>
  )
}

export default work