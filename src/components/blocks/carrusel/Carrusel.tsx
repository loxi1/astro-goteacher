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
            <section key={index} className="min-w-full flex-shrink-0 overflow-hidden">
            <div className="container flex md:flex-row flex-col items-center">
              <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img className="object-cover object-center" alt="hero" src={imagePath(item.image, 'slider')} />
                <img src={imagePath(item.elemento1, 'elementos')} alt="" className="absolute bottom-10 left-5 hidden sm:block w-20 h-20" />
                <img src={imagePath(item.elemento2, 'elementos')} alt="" className="absolute right-0 bottom-1 -z-10 hidden sm:block w-40 h-40"/>
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-20 flex flex-col md:items-start md:text-left items-start text-left">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{item.titulo}</h1>
                <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold leading-tight mb-4">
                  {item.subtitulo}
                </h1>
                <p className="mb-8 leading-relaxed text-sm sm:text-base md:text-lg max-w-[90vw] sm:max-w-[500px] md:max-w-none">
                  {item.descripcion}
                </p>

                <div className="flex justify-center">
                <a
                  href="#"
                  className="text-white hover:text-white inline-flex items-center px-6 py-3 bg-red-500 rounded-lg hover:bg-red-600 transition"
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
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carrusel.imagenes.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-red-500 scale-125' : 'bg-gray-500'
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
