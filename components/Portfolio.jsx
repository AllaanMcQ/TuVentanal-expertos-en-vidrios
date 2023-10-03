/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { ArrowLeft, ArrowRight, Close } from '@mui/icons-material';
import Image from 'next/image';

const Portfolio = () => {
  const [zoomedImage, setZoomedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageData, setImageData] = useState([]);

  const handleZoom = (imageSrc, index) => {
    setZoomedImage(imageSrc);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleUnzoom = () => {
    setZoomedImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % imageData.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + imageData.length) % imageData.length;
    setCurrentIndex(prevIndex);
  };

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      handleUnzoom();
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (zoomedImage) {
      if (e.deltaY > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (zoomedImage) {
        if (event.key === 'ArrowRight') {
          handleNext();
        } else if (event.key === 'ArrowLeft') {
          handlePrev();
        } else if (event.key === 'Escape') {
          handleUnzoom();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [zoomedImage, currentIndex]);

  useEffect(() => {
    fetch('/api/image/imageFiles')
      .then((response) => response.json())
      .then((data) => {
        const newImageData = data.imageFiles.map((fileName, index) => {
          const imagePath = `/imagenes_proyecto/${fileName}`;
          const altText = fileName.replace(/\.[^/.]+$/, '');
          const stories = [
            'Historia de la imagen 1.',
            'Historia de la imagen 2.',
            'Historia de la imagen 3.',
            // Agrega más historias para cada imagen
          ];
          return {
            src: imagePath,
            alt: altText,
            width: 800,
            height: 500,
            story: stories[index],
          };
        });
        setImageData(newImageData);
      })
      .catch((error) => console.error('Error al obtener archivos de imagen:', error));
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-16 text-center relative">
      <h1 className="font-bold text-4xl p-4 text-gray-800 text-center my-10">Nuestros Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {imageData.map((image, index) => (
          <div
            key={image.src}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => (zoomedImage ? handleUnzoom() : handleZoom(image.src, index))}
          >
            <div className="aspect-w-1 aspect-h-1">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="p-2 bg-white">
              <p className="mt-80 text-gray-600">{image.story}</p>
            </div>
          </div>
        ))}
      </div>
      {zoomedImage !== null && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 bg-opacity-70"
          onClick={handleBackgroundClick}
        >
          <Image
            src={imageData[currentIndex].src}
            alt="Zoomed Image"
            width={800}
            height={500}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
          <button
            className="m-4 p-3 bg-white text-black font-semibold rounded-full absolute top-1/2 left-4 transform -translate-y-1/2 transition hover:scale-110 focus:outline-none"
            onClick={handlePrev}
          >
            <ArrowLeft style={{ fontSize: '44px' }} />
          </button>
          <button
            className="m-4 p-3 bg-white text-black font-semibold rounded-full absolute top-1/2 right-4 transform -translate-y-1/2 transition  hover:scale-110 focus:outline-none"
            onClick={handleNext}
          >
            <ArrowRight style={{ fontSize: '44px' }} />
          </button>
          <button
            className="m-4 p-3 bg-white text-black font-semibold rounded-full absolute top-4 right-4 transition transform hover:scale-110 focus:outline-none"
            onClick={handleUnzoom}
          >
            <Close style={{ fontSize: '44px' }} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
