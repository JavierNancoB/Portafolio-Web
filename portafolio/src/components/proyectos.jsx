import React, { useState } from 'react';
import '../styles/main.css'; // Importar el archivo CSS
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';
import PuntoSVG from './puntosvg.jsx';
import { useTranslation } from "react-i18next";


function Proyectos() {
    // Arrays de datos para las imágenes de NexGreen y ERP

    const { t } = useTranslation('proyectos');

    const imageAlphaNex = useMemo(() => [
        {
            id: 0,
            value:  <div className='flex'>
                        <img src="Screenshots/alpha-nex-web-0.png" alt="alphanex" className="imagesA h-48"/>
                        <img src="Screenshots/nex-green-iphone-0.png" alt="nexgreen" className="ml-5 h-48" />
                    </div>
        },
        {
            id: 1,
            value:  <div className='flex'>
                        <img src="Screenshots/alpha-nex-web-1.png" alt="alphanex" className="imagesA h-48"/>
                        <img src="Screenshots/nex-green-iphone-1.png" alt="nexgreen" className="ml-5 h-48" />
                    </div>
        },
        {
            id: 2,
            value:  <div id='contenedor-alphanex'>
                        <div id='contenedor-alphanex-arriba'>
                            <img className='it-icons' src="tecnology-icon/flutter.png" alt="flutter" />
                            <img className='it-icons' src="tecnology-icon/dart.png" alt="dart" />
                            <img className='it-icons' src="tecnology-icon/react.png" alt="react" />
                        </div>
                        <div id='contenedor-alphanex-abajo' className='flex'>
                            <img className='it-icons dark:dark:invert' src="tecnology-icon/mapbox.png" alt="mv" />
                        </div>
                    </div>
        },
    ], []); // Dependencias vacías indican que esto se calcula solo una vez

    // Usar useMemo para memorizar imageERP
    const imageERP = useMemo(() => [
        {
            id: 0,
            value:  <div className='flex'>
                        <img src="Screenshots/home-eudora.png" alt="home-eudora" className="images h-48"/>
                    </div>
        },
        {
            id: 1,
            value:  <div className='flex'>
                        <img src="Screenshots/login-eudora.png" alt="login-eudora" className="images h-48"/>
                    </div>
        },
        {
            id: 2,
            value:  <div id='contenedor-erp'>
                        <div id='contenedor-erp-arriba'>
                            <img className='it-icons' src="tecnology-icon/django.png" alt="django" />
                            <img className='it-icons' src="tecnology-icon/python.png" alt="python" />
                        </div>
                        <div id='contenedor-erp-abajo'>
                            <img className='it-icons' src="tecnology-icon/js.png" alt="js" />
                            <img className='it-icons' src="tecnology-icon/css.png" alt="css" />
                            <img className='it-icons' src="tecnology-icon/html.png" alt="html" />
                        </div>
                    </div>
        },
    ], []); // Dependencias vacías indican que esto se calcula solo una vez

    // Estados para rastrear el índice activo y contenido actual de NexGreen
    const [activeIndexAlphaNex, setActiveIndexAlphaNex] = useState(0);
    const [imageAlphaNexData, setImageAlphaNexData] = useState(imageAlphaNex[0].value);

    const [activeIndexERP, setActiveIndexERP] = useState(0);
    const [imageERPData, setImageERPData] = useState(imageERP[0].value);

    const handleClickAlphaNex = useCallback((index) => {
        setActiveIndexAlphaNex(index);
        setImageAlphaNexData(imageAlphaNex[index].value);
    }, [imageAlphaNex]);

    const handleClickERP = useCallback((index) => {
        setActiveIndexERP(index);
        setImageERPData(imageERP[index].value);
    }, [imageERP]);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndexAlphaNex = (activeIndexAlphaNex + 1) % imageAlphaNex.length;
            const nextIndexERP = (activeIndexERP + 1) % imageERP.length;
            handleClickAlphaNex(nextIndexAlphaNex);
            handleClickERP(nextIndexERP);
        }, 4000);

        return () => clearInterval(interval);
    }, [activeIndexAlphaNex, activeIndexERP, handleClickAlphaNex, handleClickERP, imageAlphaNex.length, imageERP.length]);
    // Aquí sigue tu código para el renderizado de la componente...

    return (
        <div id='proyectos' className="flex flex-col justify-center items-center min-h-screen wrapper">
            {/* Botón para desplazar la vista hacia la sección "quien-soy" */}
            <button className="boton-arriba" onClick={() => {
                document.getElementById('quien-soy').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src="arrow/up.svg" alt="Desplazar hacia arriba" />
            </button>
            
            <h1 id="titulo-proyecto" className="text-center text-4xl mb-10 ">{t('titulo')}</h1>
            
            <div id="proyectos-erp-an" className='flex'>
                {/* Sección del proyecto NexGreen de AlphaNex */}
                <div className='el-proyecto mr-40'>
                    <div className='titulazo flex'>
                        <h1 id='tituloNG' className='mb-2 titulo-proyectos'>{t('AN')}</h1>
                        <a href="https://alphanex.cl/#inicio">
                            <img src="other-icon/url.svg" alt="a" className='h-7 ml-2'/>
                        </a>
                        
                    </div>
                    <div className='container-fotos'>{imageAlphaNexData}</div>
                    <div className='puntos-proyecto flex items-center mt-5'>
                    {imageAlphaNex.map((data, i) => (
                        <button
                            className='punto-AN separacion bg-transparent border-none cursor-pointer'
                            key={i}
                            onClick={() => handleClickAlphaNex(i)}
                        >
                            <PuntoSVG isActive={activeIndexAlphaNex === i} color={activeIndexAlphaNex === i ? '#4B4CC3' : 'blue'} />
                        </button>
                        ))}

                        {/* Mostrar el contenido actual de NexGreen */}
                        
                    </div>
                </div>
                
                {/* Sección del proyecto ERP de Eudora Vinos */}
                <div className='el-proyecto ml-30'>
                    <div className='titulazo flex'>
                        <h1 id='tituloERP' className='mb-2 titulo-proyectos t'>{t('ERP')}</h1>
                        <a href="https://github.com/JavierNancoB/Trabajo-Ingenieria-de-Software.git">
                            <img src="other-icon/githubfilled.svg" alt="b" className='h-7 ml-2 '/>
                        </a>
                    </div>
                    <div className='container-fotos'>{imageERPData}</div>
                    <div  className='puntos-proyecto flex items-center mt-5'>
                    {imageERP.map((data, i) => (
                        <button
                            className='punto-erp separacion bg-transparent border-none cursor-pointer'
                            key={i}
                            onClick={() => handleClickERP(i)}
                        >
                            <PuntoSVG isActive={activeIndexERP === i} color={activeIndexERP === i ? '#A8739C' : 'blue'} />
                        </button>
                        ))}

                        {/* Mostrar el contenido actual de ERP */}
                    </div>
                </div>
            </div>
            
            {/* Botón para desplazar la vista hacia la sección "home" */}
            <button className="boton-abajo" onClick={() => {
                document.getElementById('otros-trabajos').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src="arrow/down.svg" alt="Desplazar hacia abajo" />
            </button>
        </div>
    );
}

export default Proyectos;
