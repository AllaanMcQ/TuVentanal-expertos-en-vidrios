import React, { useState } from "react";
import Head from "next/head";
import { Grid, Container } from "@mui/material";
import ImageCard from "../components/ImageCard";
import Carrusel from "../components/Carrusel";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AyudaColumn from "../components/AyudaColumn";
import Contact from "../components/Correo";
import Instagram from "../components/Instagram";
import Typography from "@mui/material/Typography";
import { FaHandPointer } from "react-icons/fa";
import Mantencion from "../components/mantencion2";
import Trabajadores from "../components/trabajadores";

const imagesData = [
  {
    title: "Puerta de Ducha de Vidrio",
    description: "Puerta de ducha de vidrio de alta calidad.",
    imageUrl: "/imagenes_inicio/shower-door.jpg",
  },
  {
    title: "Ventanal Panorámico",
    description: "Ventanal panorámico de vidrio con vistas expansivas.",
    imageUrl: "/imagenes_inicio/ventanal-panoramico.jpg",
  },
  {
    title: "Puerta de Vidrio Transparente",
    description:"Puerta de vidrio transparente para un espacio luminoso y elegante.",
    imageUrl: "/imagenes_inicio/puerta-vidrio-transparente.jpg",
  },
  {
    title: "Panel de Vidrio Moderno",
    description: "Panel de vidrio moderno para un diseño luminoso y moderno.",
    imageUrl: "/imagenes_inicio/panel-vidrio-moderno.jpg",
  },
  {
    title: "Barandilla de Vidrio Moderna",
    description:
      "Barandilla de vidrio moderna para una vista despejada y elegante.",
    imageUrl: "/imagenes_inicio/barandilla-vidrio-moderna.jpg",
  },
  {
    title: "Ventanal Clásico",
    description: "Ventanal clásico de diseño atemporal.",
    imageUrl: "/imagenes_inicio/ventanal-clasico.jpg",
  },
  {
    title: "Puerta Natural con Acrílico",
    description:
      "Puerta natural con acrílico para una entrada única y luminosa.",
    imageUrl: "/imagenes_inicio/puerta-natural-acrilico.jpg",
  },
  {
    title: "Ventanal a Medida",
    description: "Ventanal a medida para encajar perfectamente en tu espacio.",
    imageUrl: "/imagenes_inicio/ventanal-a-medida.jpg",
  },
  // Repite esto para las otras imágenes
];

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <Head>
        <title>Tu Ventanal - Expertos en Ventanas de Vidrio</title>
        <meta
          name="description"
          content="Ofrecemos elegantes puertas y ventanas de vidrio de alta calidad para transformar tu espacio."
        />
        <link rel="icon" href="/logo.png" className="w-20 h-20" />
      </Head>

      <Carrusel
        heading="Productos"
        message="Haz clic en las imágenes para obtener un presupuesto"
      />

      <Typography className="text-2xl text-center mt-5   shadow-xl text-white bg-gradient-to-r from-yellow-300 to-orange-800 p-4">
        Productos
      </Typography>

      <Container maxWidth="xl">
        <Grid className="mb-12" container spacing={3}>
          {imagesData.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ImageCard
                title={image.title}
                description={image.description}
                imageUrl={image.imageUrl}
                onMouseEnter={() => setIsHovered(true)} // Mostrar el icono cuando el cursor pasa por encima
                onMouseLeave={() => setIsHovered(false)} // Ocultar el icono cuando el cursor sale
              >
                <div className="text-center mt-2">
                  {isHovered && (
                    <div className="mb-2">
                      <FaHandPointer size={24} className="text-gray-500" />{" "}
                      {/* Icono de react-icons */}
                    </div>
                  )}
                  <p className="text-gray-500">
                    Haz clic en la imagen para obtener un presupuesto
                  </p>
                  <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-blue-600">
                    Cotizar
                  </button>
                </div>
              </ImageCard>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Typography className="text-4xl text-center mt-5  shadow-xl text-white bg-gradient-to-r from-yellow-300 to-orange-800 p-4">
        {" "}
      </Typography>
      <Mantencion />
      <Typography className="text-4xl text-center mt-5  shadow-xl text-white bg-gradient-to-r from-yellow-300 to-orange-800 p-4">
        {" "}
      </Typography>
      <Trabajadores />
      <Typography className="text-4xl text-center mt-5  shadow-xl text-white bg-gradient-to-r from-yellow-300 to-orange-800 p-4">
        Nuestro Instagram
      </Typography>
      <Instagram />

      <div className="text-center mt-5">
        <h1 className="text-4xl text-white bg-gradient-to-r from-yellow-300 to-orange-800 p-4 shadow-xl">
          Para más información
        </h1>
      </div>

      <Contact />
      <AyudaColumn />
      <Footer />
      <FloatingButton />
    </div>
  );
}
