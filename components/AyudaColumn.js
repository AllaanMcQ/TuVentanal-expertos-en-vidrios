import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const AyudaColumn = () => {
  const handleWhatsAppClick = () => {
    // Reemplaza este número de teléfono con el tuyo
    const phoneNumber = '56987957969';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hola,%20necesito ayuda%20`;
    window.location.href = whatsappUrl;
    
  };

  return (
    <div className="text-2xl border-b-2 border-orange-600 text-center mt-4 shadow-xl text-white bg-gradient-to-r from-yellow-300 to-orange-800 p-4">
    
      <div className="flex items-center justify-center mt-2">
        <WhatsAppIcon />
        <a
          className="ml-2 text-white hover:underline cursor-pointer"
          onClick={handleWhatsAppClick}
        >
          <h1 className="text-3xl font-bold ">¿Podemos ayudarte?</h1>
         
        </a>
      </div>
    </div>
  );
};

export default AyudaColumn;
