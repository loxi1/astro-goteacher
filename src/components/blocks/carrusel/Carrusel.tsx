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

        document.startViewTransition(() => {
            setCurrentIndex(newIndex);
        });
    };

    const nextSlide = () => {
        changeSlide((currentIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        changeSlide((currentIndex - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {carrusel.imagenes.map((item, index) => (
                    <section key={index} className="section-hero min-w-full flex-shrink-0">
                        <div className="relative z-10">
                            <div className="pb-20 lg:pb-0">
                                <div className="ml-auto flex max-w-[1600px] flex-col items-center justify-between gap-10 px-10 lg:flex-row lg:pl-10 xl:px-0 xxl:gap-0">
                                    {/* Texto */}
                                    <div className="pt-[150px] text-center lg:max-w-lg lg:pb-[130px] lg:pt-[196px] lg:text-start xl:max-w-xl xxl:max-w-[746px]">
                                        <p className="text-lg font-semibold md:text-xl lg:text-2xl">
                                            {item.titulo}
                                        </p>
                                        <h1 
                                            className="font-familjenGrotesk text-4xl font-bold leading-none -tracking-[1px] sm:text-5xl md:text-7xl xl:text-8xl xxl:text-[130px]"
                                            style={{ viewTransitionName: 'slide-title' }} 
                                        >
                                            {item.subtitulo}
                                        </h1>
                                        <p className="para-lg my-[30px] md:mb-[50px]">
                                            {item.descripcion}
                                        </p>
                                    </div>

                                    {/* Imágenes principales */}
                                    <div className="relative right-0">
                                        <img 
                                            src={`/src/assets/slider/${item.image}`} 
                                            data-image-url={`/src/assets/slider/${item.image}`} 
                                            alt={item.titulo}
                                            width="762" 
                                            height="927" 
                                            className="ml-auto"
                                            style={{ viewTransitionName: 'slide-image' }} 
                                        />
                                        <img 
                                            src={`/src/assets/elementos/${item.elemento1}`}
                                            data-image-url={`/src/assets/elementos/${item.elemento1}`}
                                            alt="monitor" 
                                            width="125" 
                                            height="109" 
                                            className="absolute bottom-36 right-24 hidden sm:inline-block" 
                                        />
                                        <img 
                                            src={`/src/assets/elementos/${item.elemento2}`}
                                            data-image-url={`/src/assets/elementos/${item.elemento2}`}
                                            alt="shape-purple-blue-polygon-star"
                                            width="317" 
                                            height="317" 
                                            className="absolute -left-24 bottom-14 -z-10" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Botones de navegación */}
            <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
                onClick={prevSlide}
            >
                ◀
            </button>
            <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
                onClick={nextSlide}
            >
                ▶
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carrusel.imagenes.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                        onClick={() => changeSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carrusel;
