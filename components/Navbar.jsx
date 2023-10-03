/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isTransformed, setIsTransformed] = useState(false);
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const router = useRouter(); // Obtener la ruta actual

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const handleLinkClick = () => {
    // Recarga la página una vez
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
        setIsTransformed(true);
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
        setIsTransformed(false);
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      {/* Línea blanca para subrayar */}
      <div
        style={{
          backgroundColor: 'white',
          height: '4px',
          width: '100%',
          position: 'absolute',
          bottom: '32px',
        }}
      ></div>

      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-gray-800'>
        <Link href='/'>
          <img
            src={isTransformed ? '/logo2.png' : '/logo.png'}
            alt="Logo"
            className={`mb-2 ${color === 'transparent' ? 'mr-10' : ''} h-${
              color === 'transparent' ? '20' : '20'
            } w-${color === 'transparent' ? '20' : '20'} ${
              color === 'transparent' ? 'text-logo-large' : 'text-logo-small'
            }`}
          />
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li
            className={`p-4 ${
              router.pathname === '/' ? 'text-orange-300 ' : ''
            } relative`}
          >
            <Link href='/' onClick={handleLinkClick}>
              Inicio
              {router.pathname === '/' && (
                <div className='absolute w-full h-1 bg-orange-600 bottom-0 left-0'></div>
              )}
            </Link>
          </li>
          <li
            className={`p-4 ${
              router.pathname === '/MantenimientoVidrios' ? 'text-orange-300' : ''
            } relative`}
          >
            <Link href='/MantenimientoVidrios' onClick={handleLinkClick}>
              Mantenimiento 
              {router.pathname === '/MantenimientoVidrios' && (
                <div className='absolute w-full h-1 bg-orange-600 bottom-0 left-0'></div>
              )}
            </Link>
          </li>
          <li
            className={`p-4 ${
              router.pathname === '/Quienessomos' ? 'text-orange-300' : ''
            } relative`}
          >
            <Link href='/Quienessomos' onClick={handleLinkClick}>
              Quienes somos
              {router.pathname === '/Quienessomos' && (
                <div className='absolute w-full h-1 bg-orange-500 bottom-0 left-0'></div>
              )}
            </Link>
          </li>
          <li
            className={`p-4 ${
              router.pathname === '/ProyectosRealizados' ? 'text-orange-500' : ''
            } relative`}
          >
            <Link href='/ProyectosRealizados' onClick={handleLinkClick}>
              Proyectos
              {router.pathname === '/ProyectosRealizados' && (
                <div className='absolute w-full h-1 bg-orange-500 bottom-0 left-0'></div>
              )}
            </Link>
          </li>
          <li
            className={`p-4 ${
              router.pathname === '/Contactovidrieria' ? 'text-orange-500' : ''
            } relative`}
          >
            <Link href='/Contactovidrieria' onClick={handleLinkClick}>
              Contacto
              {router.pathname === '/Contactovidrieria' && (
                <div className='absolute w-full h-1 bg-orange-500 bottom-0 left-0'></div>
              )}
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-0'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <div className="absolute top-4 right-4 z-10">
            <button onClick={closeNav}>
              <AiOutlineClose size={20} style={{ color: 'white' }} />
            </button>
          </div>
          <ul>
            <li
              onClick={handleNav}
              className={`p-4 text-4xl hover:text-gray-500 ${
                router.pathname === '/' ? 'text-orange-500' : ''
              }`}
            >
              <Link href='/' onClick={handleLinkClick}>
                Producto
                {router.pathname === '/' && (
                  <div className='absolute w-full h-1 bg-orange-500 bottom-0 left-0'></div>
                )}
              </Link>
            </li>
            <li
              onClick={handleNav}
              className={`p-4 text-4xl hover:text-gray-500 ${
                router.pathname === 'MantenimientoVidrios' ? 'text-orange-500' : ''
              }`}
            >
              <Link href='/MantenimientoVidrios' onClick={handleLinkClick}>
              Mantenimiento 
                {router.pathname === '/MantenimientoVidrios' && (
                  <div className='absolute w-full h-1 bg-orange-500 bottom-0 left-0'></div>
                )}
              </Link>
            </li>
            <li
              onClick={handleNav}
              className={`p-4 text-4xl hover:text-gray-500 ${
                router.pathname === '/Quienessomos' ? 'text-orange-500' : ''
              }`}
            >
              <Link href='/Quienessomos' onClick={handleLinkClick}>
                Quienes somos
                {router.pathname === '/Quienessomosessomos' && (
                  <div className='absolute w-full h-1 bg-orange-500 bottom-0 left-0'></div>
                )}
              </Link>
            </li>
            <li
              onClick={handleNav}
              className={`p-4 text-4xl hover:text-gray-500 ${
                router.pathname === '/ProyectosRealizados' ? 'text-orange-500' : ''
              }`}
            >
              <Link href='/ProyectosRealizados' onClick={handleLinkClick} className='text-2x1'>
                Proyectos
                {router.pathname === '/ProyectosRealizados' && (
                  <div className='absolute w-full h-1 bg-orange-500 bottom-0 left-0'></div>
                )}
              </Link>
            </li>
            <li
              onClick={handleNav}
              className={`p-4 text-4xl hover:text-gray-500 ${
                router.pathname === '/Contactovidrieria' ? 'text-orange-500' : ''
              }`}
            >
              <Link href='/Contactovidrieria' onClick={handleLinkClick}>
                Contacto 
                {router.pathname === '/Contactovidrieria' && (
                  <div className='absolute w-full h-1 bg-orange-500 bottom-0 left-0'></div>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
