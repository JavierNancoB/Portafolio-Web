import React from 'react';
import '../styles/main.css';
import { useTranslation } from "react-i18next";

function Inicio() {
    const { t } = useTranslation('home');

    return (
        <div id="home" className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-1xl font-bold text-center text-gray-900 dark:text-white">{t('saludo')}</h1>
            <h1 id="name" className="name text-6xl font-bold text-center">Javier Nanco</h1>
            <h1 className="text-1xl font-bold text-center dark:text-white">{t('agradecimiento')}</h1>
            <a href="pdf/CV-Javier-Nanco.pdf" download="CV-Javier-Nanco.pdf">
                <button className="flex items-center mt-4 custom-bg custom-hover text-white font-bold py-2 px-5 rounded-xl">
                    <p className="text-lg mr-2">{t('descarga')}</p>
                    <img src="other-icon/download.svg" alt="Download Icon" />
                </button>
            </a>
            <button onClick={() => {
                document.getElementById('quien-soy').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src="arrow/down.svg" alt="Scroll Down Icon" />
            </button>
        </div>
    );
}

export default Inicio;
