import React, { useState, useEffect, useCallback, useMemo } from 'react';
import '../styles/main.css'; // Importar el archivo CSS
import PuntoSVG from './puntosvg.jsx';
import { useTranslation } from "react-i18next";

function Proyectos() {
    const { t } = useTranslation('proyectos');

    // Usar useMemo para memorizar las imágenes
    const imageAlphaNex = useMemo(() => [
        {
            id: 0,
            value:  <div className='flex'>
                        <img src={`${process.env.PUBLIC_URL}/Screenshots/alpha-nex-web-0.png`} alt="alphanex" className="imagesA h-48"/>
                        <img src={`${process.env.PUBLIC_URL}/Screenshots/nex-green-iphone-0.png`} alt="nexgreen" className="ml-5 h-48" />
                    </div>
        },
        {
            id: 1,
            value:  <div className='flex'>
                        <img src={`${process.env.PUBLIC_URL}/Screenshots/alpha-nex-web-1.png`} alt="alphanex" className="imagesA h-48"/>
                        <img src={`${process.env.PUBLIC_URL}/Screenshots/nex-green-iphone-1.png`} alt="nexgreen" className="ml-5 h-48" />
                    </div>
        },
        {
            id: 2,
            value:  <div id='contenedor-alphanex'>
                        <div id='contenedor-alphanex-arriba'>
                            <img className='it-icons' src={`${process.env.PUBLIC_URL}/tecnology-icon/flutter.png`} alt="flutter" />
                            <img className='it-icons' src={`${process.env.PUBLIC_URL}/tecnology-icon/dart.png`} alt="dart" />
                            <img className='it-icons' src={`${process.env.PUBLIC_URL}/tecnology-icon/react.png`} alt="react" />
                        </div>
                        <div id='contenedor-alphanex-abajo' className='flex'>
                            <img className='it-icons dark:dark:invert' src={`${process.env.PUBLIC_URL}/tecnology-icon/mapbox.png`} alt="mv" />
                        </div>
                    </div>
        },
    ], []);

    const imageERP = useMemo(() => [
        {
            id: 0,
            value:  <div className='fotos-eudora'>
                        <img src={`${process.env.PUBLIC_URL}/Screenshots/home-eudora.png`} alt="home-eudora" className="images h-48"/>
                    </div>
        },
        {
            id: 1,
            value:  <div className='fotos-eudora'>
                        <img src={`${process.env.PUBLIC_URL}/Screenshots/login-eudora.png`} alt="login-eudora" className="images h-48"/>
                    </div>
        },
        {
            id: 2,
            value:  <div id='contenedor-erp'>
                        <div id='contenedor-erp-arriba'>
                            <img className='it-icons' src={`${process.env.PUBLIC_URL}/tecnology-icon/django.png`} alt="django" />
                            <img className='it-icons' src={`${process.env.PUBLIC_URL}/tecnology-icon/python.png`} alt="python" />
                        </div>
                        <div id='contenedor-erp-abajo'>
                            <img className='it-icons' src={`${process.env.PUBLIC_URL}/tecnology-icon/js.png`} alt="js" />
                            <img className='it-icons' src={`${process.env.PUBLIC_URL}/tecnology-icon/css.png`} alt="css" />
                            <img className='it-icons' src={`${process.env.PUBLIC_URL}/tecnology-icon/html.png`} alt="html" />
                        </div>
                    </div>
        },
    ], []);

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
        }, 5000);

        return () => clearInterval(interval);
    }, [activeIndexAlphaNex, activeIndexERP, handleClickAlphaNex, handleClickERP, imageAlphaNex.length, imageERP.length]);

    return (
        <div id='proyectos' className="flex flex-col justify-center items-center min-h-screen wrapper">
            <button className="boton-arriba" onClick={() => {
                document.getElementById('quien-soy').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={`${process.env.PUBLIC_URL}/arrow/up.svg`} alt="Desplazar hacia arriba" />
            </button>
            
            <h1 id="titulo-proyecto" className="text-center text-4xl mb-10 ">{t('titulo')}</h1>
            
            <div id="proyectos-erp-an" className='flex'>
                <div className="el-proyecto lg:mr-40 mr-0">
                    <div className='titulazo flex'>
                        <h1 id='tituloNG' className='mb-2 titulo-proyectos'>{t('AN')}</h1>
                        <a href="https://alphanex.cl/#inicio">
                            <img src={`${process.env.PUBLIC_URL}/other-icon/url.svg`} alt="a" className='h-7 ml-2'/>
                        </a>
                    </div>
                    <div className='container-fotos'>{imageAlphaNexData}</div>
                    <div className='puntos-proyecto items-center mt-5'>
                        {imageAlphaNex.map((data, i) => (
                            <button
                                className='punto-AN separacion bg-transparent border-none cursor-pointer'
                                key={i}
                                onClick={() => handleClickAlphaNex(i)}
                            >
                                <PuntoSVG isActive={activeIndexAlphaNex === i} color={activeIndexAlphaNex === i ? '#4B4CC3' : 'blue'} />
                            </button>
                        ))}
                    </div>
                </div>
                
                <div className='el-proyecto ml-30'>
                    <div className='titulazo flex'>
                        <h1 id='tituloERP' className='mb-2 titulo-proyectos t'>{t('ERP')}</h1>
                        <a href="https://github.com/JavierNancoB/Trabajo-Ingenieria-de-Software.git">
                            <img src={`${process.env.PUBLIC_URL}/other-icon/githubfilled.svg`} alt="b" className='h-7 ml-2 '/>
                        </a>
                    </div>
                    <div className='container-fotos'>{imageERPData}</div>
                    <div className='puntos-proyecto items-center mt-5'>
                        {imageERP.map((data, i) => (
                            <button
                                className='punto-erp separacion bg-transparent border-none cursor-pointer'
                                key={i}
                                onClick={() => handleClickERP(i)}
                            >
                                <PuntoSVG isActive={activeIndexERP === i} color={activeIndexERP === i ? '#A8739C' : 'blue'} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            
            <button className="boton-abajo" onClick={() => {
                document.getElementById('otros-trabajos').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={`${process.env.PUBLIC_URL}/arrow/down.svg`} alt="Desplazar hacia abajo" />
            </button>
        </div>
    );
}

export default Proyectos;
