import React, { useState, useEffect } from 'react';
import { carrusel } from '../../../data/json-files/data.js';
import './style.css';

const Carrusel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalSlides = carrusel.imagenes.length;
  const [isTransitioning, setIsTransitioning] = useState(false); // Para evitar transiciones interrumpidas
  const autoSlideInterval = 8000; // Intervalo de tiempo para el auto avance en ms (ej: 8 segundos)

  const changeSlide = (newIndex: number) => {
    if (isTransitioning) return; // Evitar cambios mientras la transición está en curso
    setIsTransitioning(true);

    const updateIndex = () => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    };

    if (!document.startViewTransition) {
      updateIndex();
      return;
    }

    document.startViewTransition(updateIndex);
  };

  const nextSlide = () => changeSlide((currentIndex + 1) % totalSlides);
  const prevSlide = () => changeSlide((currentIndex - 1 + totalSlides) % totalSlides);

  const imagePath = (file: string, folder: string) => `/assets/${folder}/${file}`;

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    // Limpiar el intervalo cuando el componente se desmonta para evitar fugas de memoria
    return () => clearInterval(intervalId);
  }, [currentIndex, totalSlides, nextSlide]); // Dependencias para que el efecto se reactive si cambian

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
                  className="absolute bottom-10 left-5 hidden sm:block w-40 h-40"
                />
                <img
                  src={imagePath(item.elemento2, 'elementos')}
                  alt=""
                  className="absolute bottom-0 right-0 hidden sm:block w-35 h-35 -z-10"
                />
              </div>

              {/* Contenido centrado */}
              <div className="md:w-1/3 lg:w-1/3 sm:w-1/2 px-6 flex flex-col items-start justify-center text-left space-y-4 h-full">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">{item.titulo}</h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-gray-800">
                  <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">{item.subtitulo}</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-white">
                  {item.descripcion}
                </p>
                <a className="group relative inline-block focus:ring-3 focus:outline-hidden dark:invert" key={index} // Es importante añadir una key cuando mapeas elementos
                  href={`/servicio/${item.subtitulo.toLowerCase()}`}>
                  <span
                    className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                  ></span>

                  <span
                    className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black uppercase"
                  >
                    Ver {item.subtitulo}
                  </span>
                </a>

                <a
                  href="#reserva"
                  className="hidden px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-md"
                >
                  Reserva tu clase ahora
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
                  src={imagePath(item.elemento3, 'elementos')}
                  alt=""
                  className="absolute bottom-10 right-5 hidden sm:block w-40 h-40"
                />
                <img
                  src={imagePath(item.elemento4, 'elementos')}
                  alt=""
                  className="absolute bottom-0 left-0 hidden sm:block w-35 h-35 -z-10"
                />
              </div>

            </div>
          </section>

        ))}
      </div>

      {/* Botones de navegación */}
      <button
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-red-500 z-20"
        aria-label='Anterior imagen'
        onClick={prevSlide}
      >
        ◀
      </button>
      <button
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-red-500 z-20"
        aria-label='Siguiente imagen'
        onClick={nextSlide}
      >
        ▶
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {carrusel.imagenes.map((_, index) => (
          <button
            key={index}
            className={`sm:w-4 sm:h-4 w-3.5 h-3.5 rounded-full ring-1 ring-white shadow-md transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary-500 scale-125'
                : 'bg-neutral-400 hover:bg-neutral-500'
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