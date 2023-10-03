/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Grid, Typography, Container, Card, CardContent, CardMedia, Link } from '@mui/material';

const MetasSection = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Grid container spacing={4}>
        {/* Imágenes de productos */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className="h-full">
            <CardMedia
              component="img"
              height="260"
              image="/quien1.png"
              alt="Producto 1"
              style={{ objectFit: "cover", width: "100%", height: "40%" }}
            />
            <CardContent className="h-full">
              <Typography variant="h5" gutterBottom>
                Nuestra Área de Acción: ¡Desde la Región Metropolitana y Más Allá!
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Servimos a la comunidad de la Región Metropolitana y sus
                alrededores, siempre dispuestos a satisfacer sus necesidades
                únicas. Colaboramos estrechamente con nuestros clientes en una
                amplia gama de proyectos, desde residencias privadas hasta
                empresas y proyectos industriales. Sea cual sea su visión,
                ¡en TuVentanal.cl la hacemos realidad!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className="h-full">
            <CardMedia
              component="img"
              height="260"
              image="/quien2.jpg"
              alt="Producto 2"
              style={{ objectFit: "cover", width: "100%", height: "40%" }}
            />
            <CardContent className="h-full">
              <Typography variant="h5" gutterBottom>
                Nuestra Misión: ¡Hacer Realidad sus Sueños con Vidrios y Aluminios!
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Nuestra misión es clara y poderosa: estamos aquí para hacer
                realidad sus sueños y necesidades en lo que respecta a vidrios y
                aluminios. Lo hacemos brindando servicios de calidad premium,
                personalizados y a precios competitivos. En TuVentanal.cl, su
                satisfacción es nuestra principal prioridad.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className="h-full">
            <CardMedia
              component="img"
              height="260"
              image="/quien3.jpg"
              alt="Producto 3"
              style={{ objectFit: "cover", width: "100%", height: "40%" }}
            />
            <CardContent className="h-full">
              <Typography variant="h5" gutterBottom>
                Nuestra Visión: ¡Liderar la Innovación y Calidad en la Industria!
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Miramos hacia el futuro con una visión clara: ser líderes en la
                producción y comercialización de vidrios y aluminios para
                satisfacer la creciente demanda de la industria de la
                construcción. Lo haremos manteniendo los más altos estándares de
                calidad y servicio, impulsando la innovación y asegurándonos de
                que cada proyecto sea un testimonio de nuestro compromiso con la
                excelencia.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Texto de bienvenida */}
        <Grid item xs={12} sm={6} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                En Resumen
              </Typography>
              <Typography variant="body1" color="textSecondary">
                En TuVentanal.cl, somos apasionados y especializados en el
                mundo de los vidrios y aluminios, brindando experiencias
                excepcionales a nuestros clientes.
              </Typography>
              <Typography variant="body1" color="textSecondary" className="mt-2">
                Nuestro equipo altamente calificado valora el trabajo en equipo y
                ofrece un enfoque personalizado para cada proyecto.
              </Typography>
              <Typography variant="body1" color="textSecondary" className="mt-2">
                Nos enorgullece servir a la Región Metropolitana y más allá,
                convirtiendo sueños en realidad con innovación y calidad.
              </Typography>
              <Typography variant="body1" color="textSecondary" className="mt-2">
                Nuestra visión es liderar la industria de vidrios y aluminios,
                estableciendo los estándares más altos en términos de calidad y
                servicio. Cada proyecto que emprendemos es un testimonio de
                nuestra dedicación a la excelencia.
              </Typography>
              <Typography variant="body1" color="textSecondary" className="mt-2">
                TuVentanal.cl no es solo una empresa, sino un socio confiable
                que se enorgullece de su pasión, experiencia, compromiso con la
                calidad y visión de liderar la industria de vidrios y aluminios.
                Estamos aquí para hacer realidad sus proyectos y necesidades,
                brindando resultados excepcionales en cada paso del camino.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Información de contacto */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Contáctenos
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Si tiene alguna pregunta o consulta, no dude en ponerse en
                contacto con nosotros:
              </Typography>
              <ul>
                <li>
                  <Link href="mailto:tuventanal.cl@gmail.com">
                    <Typography variant="body1" color="textSecondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      tuventanal.cl@gmail.com
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Typography variant="body1" color="textSecondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    +569 8795 7969
                  </Typography>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MetasSection;
