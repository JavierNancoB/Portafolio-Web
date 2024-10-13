import React from "react";
import '../styles/main.css'; // Importar el archivo CSS
import { useTranslation } from "react-i18next";


function End() {
    
    const { t } = useTranslation('end');

    const textToCopy = "javiernancob@gmail.com";

    const handleCopy = async () => {
        try {
        await navigator.clipboard.writeText(textToCopy);
        alert('¡Correo copiado!');
        } catch (err) {
        alert('Error al copiar texto: ', err);
        }
    };

    const isProduction = process.env.NODE_ENV === 'production';
    const basePath = isProduction ? '/Portafolio-Web' : '';

    return (
        <div id='end' className="flex flex-col justify-center items-center min-h-screen wrapper">
            <button className="boton-arriba" onClick={() => {
                document.getElementById('otros-trabajos').scrollIntoView({ behavior: 'smooth' });
                }}>
                <img src="arrow/up.svg" alt="Desplazar hacia arriba" />
            </button>
            <h1 id="contactame">{t('title')}</h1>
            <div id='cuerpo-final' className="flex">
                <a href="mailto:javiernancob@gmail.com?subject=Asunto del Correo&body=Hola Javier, me gustaria contratarte.">
                    <img id='mail-svg' src="other-icon/mail.svg" alt="mail" />
                </a>               
                <div id='cuadro-correo' className="flex">
                    <h1 id="correo">javiernancob@gmail.com</h1>
                    <button onClick={handleCopy}>
                        <img id='copy-svg' src="other-icon/copy.svg" alt="copy" />
                    </button>
                </div>    
            </div>
            <div id="cuadro-repo">
                <a href="https://github.com/JavierNancoB/Portafolio-Web" className="link-repo-g flex">
                    <h1 id="link-repo">{t('repo')}</h1>
                    <img src={`${basePath}/other-icon/githubgray.svg`} alt="portafolio-repo"/>
                </a>
            </div>
        </div>
    );
}

export default End;