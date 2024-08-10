import React from 'react';
import '../styles/main.css'; // Importar el archivo CSS
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from "react-i18next";

function OtrosTrabajos() {

    const { t } = useTranslation('otros-trabajos');

    const otrosTrabajos = [
        {
            name: [t('Djikstra')],
            img: 'otros-trabajos/djikstra.png',
            review: 'Python',
            url: 'https://github.com/JavierNanco/Juego-Heroe-y-Bruja-python',
        },  
        {
            name: [t('fuerza bruta')],
            img: 'otros-trabajos/fuerza-bruta.png',
            review: 'Python',
            url: 'https://github.com/JavierNanco/Caballo-de-ajedrez',    
        },
        {
            name: [t('ABB')],
            img: 'otros-trabajos/diccionario.png',
            review: 'C++',
            url: 'https://github.com/JavierNanco/Taller-5-EDD',

        },
        {
            name: [t('Pokémon')],
            img: 'otros-trabajos/pokemon.png',
            review: 'SQL',
            url: 'https://github.com/JavierNanco/Taller-BDD-sql',
        },
        {
            name: [t('C++')],
            img: 'otros-trabajos/cpp.png',
            review: 'C++',
            url: 'https://github.com/JavierNanco/Taller-Lenguaje',
        },
        {
            name: [t('Lollapalooza')],
            img: 'otros-trabajos/lola.png',
            review: 'C++',
            url: 'https://github.com/JavierNanco/Taller-2-Lollapalooza',
        },

    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
      

    return (
        <div id='otros-trabajos' className="flex flex-col justify-center items-center min-h-screen wrapper"> 
            <button onClick={() => {
                document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' });
                }}>
                <img src="arrow/up.svg" alt="Desplazar hacia arriba" />
            </button>
            <div className="w-3/4">
                <div className="mt-2">
                <Slider {...settings}> 
                    {otrosTrabajos.map((d) => (
                    <div key={d.name} className="h-450px text-black">
                        <div className="h-56 cuadros flex justify-center items-center rounded-xl">
                            <img src={d.img} alt="" className="h-44 rounded"/>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4">
                            <p className="text-xl font-semibold">{d.name}</p>
                            <div className='flex link'>
                                <p className="text-center font-bold lenguaje">{d.review}</p>
                                <a href={d.url} target="_blank" rel="noreferrer">
                                    <img src="other-icon/githubfilledv.svg" alt="Github" className="h-6 w-6 lenguaje-git" />
                                </a>
                            </div>
                        </div>
                    </div>
                    ))}
                </Slider>
                </div>
            </div>
            <button onClick={() => {
                document.getElementById('end').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src="arrow/down.svg" alt="Desplazar hacia abajo" />
            </button>
        </div>
    );
}

export default OtrosTrabajos;