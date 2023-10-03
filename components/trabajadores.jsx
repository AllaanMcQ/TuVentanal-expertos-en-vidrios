/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Metas = () => {
  const trabajadores = [
    {
      nombre: 'Sofía Ignacia Binfa Jara',
      profesion: 'Ingeniería en Gestión Logística, certificada en liderazgo',
      area: 'Área comercial',
      experiencia: '5 años',
      frase: 'Mi meta es establecer relaciones sólidas con nuestros clientes y socios comerciales, basadas en la confianza y la integridad.',
      imagen: '/SofiaBinfa.jpg', // Ruta de la imagen del trabajador
    },
    {
      nombre: 'Nuestro Equipo',
      profesion: 'Son especialista en vidrios y aluminio',
      area: 'Diseñadores y fabricantes',
      experiencia: '14 años',
      frase: 'Nuestro  compromiso es transformar tus ideas en ventanales excepcionales, fusionando innovación, diseño y calidad para hogares y oficinas.',
      imagen: '/trabajo-equipo.jpg', // Ruta de la imagen del trabajador
    },
    {
      nombre: 'Jordin Alexis Espinoza Medina',
      profesion: 'Ingeniería en Gestión Logística, certificado en Abastecimiento',
      area: 'Área de Adquisiciones',
      experiencia: '5 años',
      frase: 'Mi enfoque principal es identificar oportunidades de mejora constante en nuestros procesos de adquisiciones para elevar nuestros estándares de calidad de forma continua.',
      imagen: '/JordinEspinza.jpg', // Ruta de la imagen del trabajador
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-semibold mb-6 text-center">Líderes de la Empresa</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {trabajadores.map((trabajador, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={trabajador.imagen}
              alt={trabajador.nombre} // Agregar etiqueta alt con texto descriptivo
              className="w-55 h-60 mx-auto rounded-full"
            />
            <h2 className="text-xl font-semibold mt-4">{trabajador.nombre}</h2>
            <p className="text-gray-500">{trabajador.profesion}</p>
            <p className="text-gray-500 my-1">{trabajador.area}</p>
            <p className="text-gray-600 mt-2">{trabajador.frase}</p>
            <p className="text-gray-500 mt-2">{`Experiencia: ${trabajador.experiencia}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metas;
