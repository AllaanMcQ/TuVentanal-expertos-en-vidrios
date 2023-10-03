// Importa React y el useState hook de React.
import React, { useState } from 'react';

// Importa iconos específicos de FontAwesome.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp as fabWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Define un componente llamado FloatingButton.
const FloatingButton = () => {
  // Declara un estado para controlar si se muestra la información de contacto.
  const [showContactInfo, setShowContactInfo] = useState(false);

  // Función para alternar la visibilidad de la información de contacto.
  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    // Contenedor fijo en la esquina inferior derecha de la pantalla.
    <div className="fixed bottom-5 right-5 sm:right-5 md:right-10 lg:right-25">
      {/* Botón de WhatsApp */}
      <button
        className="bg-green-500 hover:bg-green-600 rounded-full p-2 sm:p-1 md:p-1 lg:p-1 shadow-lg flex items-center justify-center text-white transition duration-300 transform hover:scale-110"
        style={{ width: '60px', height: '60px' }}
        onClick={toggleContactInfo}
      >
        {/* Icono de WhatsApp */}
        <FontAwesomeIcon icon={fabWhatsapp} className="h-10 sm:h-8 md:h-10 lg:h-12" />
      </button>
      
      {/* Si showContactInfo es true, muestra la información de contacto */}
      {showContactInfo && (
        <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg shadow-lg absolute bottom-20 right-2 sm:right-5 md:right-10 lg:right-20 transform translate-x-8">
          <div className="flex items-center mb-2 md:mb-3 lg:mb-4">
            {/* Icono de usuario */}
            <FontAwesomeIcon icon={faUserTie} className="text-gray-600 text-2xl md:text-3xl lg:text-4xl mr-2" />
            <div>
              <p className="text-gray-800 text-lg md:text-xl lg:text-2xl font-semibold">
                ¡Contáctanos!
              </p>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                Estamos disponibles para ayudarte con tus consultas o cotizaciones en WhatsApp. ¡Siéntete libre de contactarnos en cualquier momento!
              </p>
            </div>
          </div>
          {/* Enlace de WhatsApp */}
          <a
            href="https://api.whatsapp.com/send?phone=56987957969&text=Hola,%20estoy%20interesado%20en%20una%20cotización"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 rounded-md py-2 px-3 md:py-2 md:px-4 lg:py-3 lg:px-5 flex items-center justify-center text-white text-center transition duration-300 font-semibold text-sm md:text-base lg:text-lg"
          >
            <div className="flex items-center">
              <span>¡Contáctanos!</span>
              {/* Icono de WhatsApp */}
              <FontAwesomeIcon icon={fabWhatsapp} className="ml-2 h-6 sm:h-8 md:h-10 lg:h-12" />
            </div>
          </a>
          
        </div>
        
      )}
    </div>
  );
};

// Exporta el componente FloatingButton.
export default FloatingButton;
<FontAwesomeIcon icon={fabWhatsapp} className="h-10 sm:h-8 md:h-10 lg:h-12" />