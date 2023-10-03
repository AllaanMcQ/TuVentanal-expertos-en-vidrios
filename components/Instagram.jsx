import React, { useEffect } from 'react';

const Instagram = () => {
  useEffect(() => {
    // Cargar el script de Lightwidget de forma asíncrona
    const script = document.createElement('script');
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpiar el script al desmontar el componente
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex items-center justify-center mt-10 mb-10">
      <iframe
        src="//lightwidget.com/widgets/7e8f93912f60568cb15701bb94d4b797.html"
        scrolling="no"
       
        className="lightwidget-widget"
        style={{ width: '90%', border: '0', overflow: 'hidden' }}
      ></iframe>
    </div>
  );
};

export default Instagram;
