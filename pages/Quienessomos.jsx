/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Grid, Typography, Container, Card, CardContent } from '@mui/material';
import Carrusel from '../components/Carrusel';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import CarruselQ from '../components/CarruselQ';
import Trabajadores from '../components/trabajadores';
import MetasSection from '../components/metas';

const PresentationSection = () => {
  return (
    <div>
      <Carrusel heading="Nuestra Empresa" message="Baja para informarte sobre quienes somos y nuestra empresa" />
      <Typography className="text-4xl text-center mt-5 mb-10 shadow-xl text-white bg-gradient-to-r from-yellow-300 to-orange-800 p-4">TuVentanal.cl - Expertos en Vidrios y Aluminios</Typography>
      <Container maxWidth="xl">
        <Grid container spacing={8} justify="center">
          <Grid item xs={12} sm={6} lg={6} className="flex items-center">
            {/* Contenido del carrusel o del grid */}
            <Card className="shadow-lg p-8">
              <CardContent>
                <Typography variant="h4" className="text-center" gutterBottom>
                  Bienvenidos a TuVentanal.cl
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Somos un equipo apasionado y dedicado con experiencia en el mundo de los vidrios y aluminios. Ofrecemos una amplia gama de productos y servicios de alta calidad, desde ventanas y puertas hasta estructuras y shower doors. Nuestro compromiso es brindar la mejor calidad a precios justos.
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body1" color="textSecondary">
                  Valoramos el trabajo en equipo y la satisfacción del cliente. Cada miembro de nuestro equipo aporta un conjunto único de habilidades y conocimientos para brindarte una experiencia personalizada en tus proyectos de vidrio y aluminio.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={6} className="flex items-center">
            {/* Coloca aquí tu otro carrusel o contenido */}
            <CarruselQ />
          </Grid>
        </Grid>
      </Container>
      <Trabajadores />
      <MetasSection />
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default PresentationSection;
