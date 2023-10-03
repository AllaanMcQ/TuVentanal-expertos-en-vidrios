/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

export default function ImageCard({ title, description, imageUrl }) {
  const [isActive, setIsActive] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const openWhatsApp = () => {
    const phoneNumber = '56987957969'; // Número de WhatsApp al que deseas enviar el mensaje
    const message = `Hola, necesito cotizar un/a  ${title}.`; // Mensaje con el título de la imagen

    // Construye la URL de WhatsApp con el número de teléfono y el mensaje
    const whatsappUrl = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`;

    // Abre una nueva ventana o pestaña con la URL de WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const handleCardClick = () => {
    setIsActive(true);

    // Establecer el zoom en true
    setIsZoomed(true);

    // Configura un temporizador para volver a la normalidad después de 2 segundos
    setTimeout(() => {
      setIsActive(false);
      setIsZoomed(false);
    }, 2000);
  };

  return (
    <div
      className={`relative overflow-hidden cursor-pointer group transition-transform duration-300 transform ${
        isZoomed ? 'scale-105 shadow-lg' : 'scale-100'
      }`}
      onClick={handleCardClick}
      style={{
        height: '500px', // Establece una altura fija para todas las tarjetas
      }}
    >
      <div className="bg-gradient-to-t  via-transparent to-transparent py-3 text-center text-gray-800 font-semibold mb-1">
        {title}
      </div>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 transform scale-100 group-hover:scale-110 rotate-0 group-hover:rotate-0"
      />
      {isActive && (
        <div className="absolute inset-0 bg-black opacity-75 transition-opacity duration-300">
          <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-100">
            <div className="text-white text-center p-4">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm">{description}</p>
              <button
                onClick={openWhatsApp}
                className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
              >
                Cotizar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
