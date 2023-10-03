import React from "react";
import Image from "next/image";
import RoomIcon from "@mui/icons-material/Room";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+56987957969";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hola,%20necesito%20ayuda%20`;
    window.location.href = whatsappUrl;
  };

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <Image src="/logo.png" alt="Logo de la empresa" width={100} height={33} />

        <div
          className="text-center text-sm cursor-pointer text-gray-500 hover:text-white mt-4"
          onClick={handleWhatsAppClick}
        >
          ¿Necesitas ayuda? Contáctanos en WhatsApp: +56987957969
        </div>
        <div className="lg:w-1/4">
          <div className="mb-4 lg:mb-0">
            {/* Agrega aquí tu mapa de ubicación */}
          </div>
        </div>
        <div className="lg:w-1/2 text-center">
          <div className="mb-4 lg:mb-0">
            <p className="text-sm mt-2">
              <RoomIcon /> Dirección: Batuco/Lampa, Región Metropolitana, Chile.
            </p>
            <p className="text-sm">
              <PhoneIcon /> Teléfono: +56 9 8795 7969
            </p>
            <p className="text-sm">
              <MailOutlineIcon /> Correo Electrónico:{" "}
              <a href="mailto:Tuventanal.cl@gmail.com">Tuventanal.cl@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="lg:w-1/4 text-center">
          <div>
            <a href="https://www.instagram.com/tuventanal.cl/" className="mr-4">
              <InstagramIcon />
            </a>
            <a href="[Enlace de Facebook]" className="mr-4">
              <FacebookIcon />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=$56987957969&text=Hola,%20necesito%20ayuda%20"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
