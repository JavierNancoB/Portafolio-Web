import React, { useState } from 'react';
import '../styles/main.css'; // Importar el archivo CSS
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import PuntoSVG from './puntosvg.jsx';
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';
import { useMemo } from 'react';

function QuienSoy() {
    const { t, i18n } = useTranslation('quien-soy');

    const [text] = useTypewriter({
        words: [t('palabra1'), t('palabra2'), t('palabra3'), 'Javier Nanco'],
        loop: true,
    });

    const words = useMemo(() => [
        { id: 0, value: <h1 dangerouslySetInnerHTML={{ __html: t('description1') }}></h1> },
        { id: 1, value: <h1 dangerouslySetInnerHTML={{ __html: t('description2') }}></h1> }
    ], [t]);

    const [activeIndex, setActiveIndex] = useState(0);
    const [wordData, setWordData] = useState(words[0].value);

    useEffect(() => {
        setWordData(words[activeIndex].value);
    }, [i18n.language, activeIndex, words]); // Añade activeIndex como dependencia para actualizar cuando cambie

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div id="quien-soy" className="flex flex-col justify-center items-center min-h-screen wrapper">
            <button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>
                <img src="arrow/up.svg" alt="Desplazar hacia arriba" />
            </button>
            <div className="flex">
                <div>
                    <img src="JavierNanco.png" alt="Programador" className="mt-10 mr-10 h-48"/>
                </div>
                <div>
                    <h1 id="pregunta">
                        {t('titulo')}  
                        <span className='Escritura' style={{ fontWeight: 'bold' }}> {text}</span> 
                        <span><Cursor/></span>
                    </h1>
                    <div className='parrafo'>{wordData}</div>
                </div>
            </div>
            <div className='puntos flex items-center mt-5'>
                {words.map((data, i) => (
                    <button
                        className='separacion bg-transparent border-none cursor-pointer'
                        key={i}
                        onClick={() => handleClick(i)}
                    >
                        <PuntoSVG isActive={activeIndex === i} color={activeIndex === i ? '#0D928B' : '#0000FF'} />
                    </button>
                ))}
            </div>
            <button onClick={() => document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' })}>
                <img src="arrow/down.svg" alt="Desplazar hacia abajo" />
            </button>
        </div>
    );
}

export default QuienSoy;

