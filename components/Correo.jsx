import React, { useState } from 'react';
import { TextField, Button, Snackbar, Alert, CircularProgress } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import Image from 'next/image'; // Importa el componente Image de Next.js
import Logo from '../public/logo2.png'; // Asegúrate de tener la ruta correcta a tu logotipo

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '+569',
    message: '',
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false); // Estado para la notificación

  const maxPhoneNumberLength = 12; // +569 + 8 dígitos

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simular una solicitud a un endpoint de API
      const response = await fetch('/api/send/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setSnackbarOpen(true);
        resetForm();
        setNotificationOpen(true); // Mostrar la notificación
      } else {
        // Manejar errores aquí
      }
    } catch (error) {
      // Manejar errores aquí
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phoneNumber: '+569',
      message: '',
    });
  };

  return (
    <div className="touch-scrollable">
      <div>
        {/* Apartado de Ubicación con Mapa */}
        <div className="grid md:grid-cols-2 gap-8 p-4 md:p-8">
          <div className="bg-white p-4 md:p-8">
            {/* Agrega el contenedor del texto "Somos:" */}
            <div className="flex flex-col items-center">
              <p className="text-xl md:text-2xl font-bold mb-4">Recuerda que somos</p>
              <div className="flex justify-end">
                <Image src={Logo} alt="Logotipo" width={550} height={550} />
              </div>
            </div>
          </div>
          <div className="bg-white p-4 md:p-8">
            
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={() => setSnackbarOpen(false)}
            >
              <Alert onClose={() => setSnackbarOpen(false)} severity="success">
                Cotización enviada.
              </Alert>
            </Snackbar>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Contactanos</h2>
              <TextField
                label="Nombre"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Número de Teléfono"
                type="tel"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                helperText={
                  formData.phoneNumber.length > maxPhoneNumberLength
                    ? 'Número superior a 8 dígitos'
                    : ''
                }
              />
              <TextField
                label="Mensaje"
                multiline
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<EmailIcon />}
                fullWidth
                disabled={isLoading || isSubmitted}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                {isLoading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : isSubmitted ? (
                  'Cotización enviada'
                ) : (
                  'Enviar'
                )}
              </Button>
              {isSubmitted && (
                <p className="mt-2  text-green-600">
                  Cotización enviada
                </p>
              )}

              {/* Notificación */}
              {notificationOpen && (
                <Snackbar
                  open={notificationOpen}
                  autoHideDuration={6000}
                  onClose={() => setNotificationOpen(false)}
                >
                  <Alert onClose={() => setNotificationOpen(true)} severity="success">
                    Solicitud enviada, nos contactaremos pronto.
                  </Alert>
                </Snackbar>
              )}
            </form>
          </div>
        </div>
        <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl text-center mt-5 mb-10  shadow-xl text-white bg-gradient-to-r from-yellow-300 to-orange-800 p-4">Ubicación de TU Ventanal  </h1>
        
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                title="Google Map"
                width="100%"
                height="400"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=-33.230191,%20-70.808545&t=&z=15&ie=UTF8&iwloc=&output=embed"
              ></iframe>
              <br />
              <style>
                {`.mapouter{position: relative;text-align: right;height: 400px;width: 100%;}`}
              </style>
              <style>
                {`.gmap_canvas{overflow: hidden;background: none !important;height: 400px;width: 100%;}`}
              </style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

