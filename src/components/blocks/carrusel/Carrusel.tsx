import React, { useState } from 'react';
import { carrusel } from '../../../data/json-files/data.js';
import './style.css';

const Carrusel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalSlides = carrusel.imagenes.length;

  const changeSlide = (newIndex: number) => {
    if (!document.startViewTransition) {
      setCurrentIndex(newIndex);
      return;
    }

    document.startViewTransition(() => setCurrentIndex(newIndex));
  };

  const nextSlide = () => changeSlide((currentIndex + 1) % totalSlides);
  const prevSlide = () => changeSlide((currentIndex - 1 + totalSlides) % totalSlides);

  const imagePath = (file: string, folder: string) => `/assets/${folder}/${file}`;

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carrusel.imagenes.map((item, index) => (
            <section key={index} className="w-full lg:h-[80vh] md:h-[80vh] flex-shrink-0 flex items-center justify-center overflow-hidden">
            <div className="flex w-full h-full items-center justify-between">
          
              {/* Imagen izquierda */}
              <div className="md:w-1/3 lg:w-1/3 sm:w-1/2 h-full relative">
                <img
                  src={imagePath(item.image, 'slider')}
                  alt="Imagen izquierda"
                  className="w-full h-full object-cover"
                />
                {/* Elementos decorativos */}
                <img
                  src={imagePath(item.elemento1, 'elementos')}
                  alt=""
                  className="absolute bottom-10 left-5 hidden sm:block w-20 h-20"
                />
                <img
                  src={imagePath(item.elemento2, 'elementos')}
                  alt=""
                  className="absolute top-10 right-2 hidden sm:block w-24 h-24 -z-10"
                />
              </div>
          
              {/* Contenido centrado */}
              <div className="md:w-1/3 lg:w-1/3 sm:w-1/2 px-6 flex flex-col items-start justify-center text-left space-y-4 h-full">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">{item.titulo}</h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-gray-800">
                  {item.subtitulo}
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                  {item.descripcion}
                </p>
                <a
                  href="#"
                  className="mt-4 text-white hover:text-white inline-flex items-center px-6 py-3 bg-red-500 rounded-lg hover:bg-red-600 transition"
                >
                  Más información
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
          
              {/* Imagen derecha */}
              <div className="lg:w-1/3 md:w-1/3 lg:block h-full relative hidden md:block">
                <img
                  src={imagePath(item.image_2, 'slider')}
                  alt="Imagen derecha"
                  className="w-full h-full object-cover"
                />
                {/* Elementos decorativos */}
                <img
                  src={imagePath(item.elemento1, 'elementos')}
                  alt=""
                  className="absolute bottom-10 right-5 hidden sm:block w-20 h-20"
                />
                <img
                  src={imagePath(item.elemento2, 'elementos')}
                  alt=""
                  className="absolute top-10 left-2 hidden sm:block w-24 h-24 -z-10"
                />
              </div>
          
            </div>
          </section>
          
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-red-500 z-20"
        onClick={prevSlide}
      >
        ◀
      </button>
      <button
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-red-500 z-20"
        onClick={nextSlide}
      >
        ▶
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carrusel.imagenes.map((_, index) => (
          <button
            key={index}
            className={`sm:w-6 sm:h-6 w-6 h-6 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-primary-500 scale-125' : 'bg-neutral-500'
            }`}
            onClick={() => changeSlide(index)}
            type="button"
          />
        ))}
      </div>

    </div>
  );
};

export default Carrusel;
