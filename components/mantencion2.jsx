/* eslint-disable @next/next/no-img-element */
import React from "react";

const Mantencion = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold text-center mt-10 mb-5 md:mb-8">
        Servicios de Mantenimiento y Reparación de Ventanas de Vidrio
      </h1>
      <div>
        <h2 className="mx-5 md:mx-50 text-orange-800 text-lg md:text-2xl font-bold text-center mb-4 md:mb-8">
          Optimiza y prolonga la vida útil de tus ventanas con nuestros servicios de mantenimiento y reparación. Invierte en su cuidado para disfrutar de sus beneficios duraderos. Contáctanos ahora para mantener tus espacios en excelentes condiciones.
        </h2>
      </div>
      <div className="mx-12 mb-20 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-8 justify-center">
        <div className="border border-gray-300 p-4 rounded-md text-center flex flex-col justify-center items-center transition-transform transform-gpu hover:scale-105">
          <div className="text-3xl text-orange-500">
            <img src="/imagenes_iconos/seguridad.PNG" alt="Icono de seguridad" className="w-16 h-16" />
          </div>
          <p className="mt-2 font-semibold">Seguridad</p>
          <p className="mt-2">
            Mantener tus ventanas en buen estado es esencial para garantizar la seguridad de tu hogar o negocio. Nuestros servicios de mantenimiento aseguran que los mecanismos de bloqueo funcionen correctamente y previenen daños que puedan comprometer la seguridad.
          </p>
        </div>
        <div className="border border-gray-300 p-4 rounded-md text-center flex flex-col justify-center items-center transition-transform transform-gpu hover:scale-105">
          <div className="text-3xl text-orange-500">
            <img src="/imagenes_iconos/proteccion.PNG" alt="Icono de protección" className="w-16 h-16" />
          </div>
          <p className="mt-2 font-semibold">Protección</p>
          <p className="mt-2">
            Las ventanas en buen estado actúan como una barrera eficaz contra los elementos. Nuestro servicio de mantenimiento previene filtraciones de agua, corrientes de aire y daños causados por la exposición constante a la intemperie.
          </p>
        </div>
        <div className="border border-gray-300 p-4 rounded-md text-center flex flex-col justify-center items-center transition-transform transform-gpu hover:scale-105">
          <div className="text-3xl text-orange-500">
            <img src="/imagenes_iconos/durabilidad.PNG" alt="Icono de durabilidad" className="w-16 h-16" />
          </div>
          <p className="mt-2 font-semibold">Durabilidad</p>
          <p className="mt-2">
            Tus ventanas son una inversión a largo plazo. Nuestro programa de mantenimiento anual puede extender significativamente su vida útil, evitando costosas reparaciones o reemplazos prematuros.
          </p>
        </div>
        <div className="border border-gray-300 p-4 rounded-md text-center flex flex-col justify-center items-center transition-transform transform-gpu hover:scale-105">
          <div className="text-3xl text-orange-500">
            <img src="/imagenes_iconos/comparacion.PNG" alt="Icono de comparación" className="w-16 h-16" />
          </div>
          <p className="mt-2 font-semibold">Comparación</p>
          <p className="mt-2">
            Mantener tus ventanas en perfectas condiciones te permite comparar su rendimiento con otras marcas o modelos. Esto te ayuda a tomar decisiones informadas sobre futuras actualizaciones o mejoras.
          </p>
        </div>
        <div className="border border-gray-300 p-4 rounded-md text-center flex flex-col justify-center items-center transition-transform transform-gpu hover:scale-105">
          <div className="text-3xl text-orange-500">
            <img src="/imagenes_iconos/calidad.PNG" alt="Icono de calidad" className="w-16 h-16" />
          </div>
          <p className="mt-2 font-semibold">Calidad</p>
          <p className="mt-2">
            La calidad de vida en tus espacios está directamente relacionada con la calidad de tus ventanas. Un mantenimiento regular garantiza que funcionen sin problemas, lo que se traduce en mayor comodidad y eficiencia energética.
          </p>
        </div>
        <div className="border border-gray-300 p-4 rounded-md text-center flex flex-col justify-center items-center transition-transform transform-gpu hover:scale-105">
          <div className="text-3xl text-orange-500">
            <img src="/imagenes_iconos/beneficios.PNG" alt="Icono de beneficios" className="w-16 h-16" />
          </div>
          <p className="mt-2 font-semibold">Beneficios</p>
          <p className="mt-2">
            Además de los aspectos funcionales, unas ventanas bien mantenidas mejoran la estética de tu propiedad y aumentan su valor. También contribuyen a la eficiencia energética, lo que se traduce en ahorros a largo plazo en tus facturas de energía.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mantencion;
