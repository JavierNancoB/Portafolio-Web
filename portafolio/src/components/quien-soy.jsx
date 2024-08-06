import React, { useState } from 'react';
import '../styles/main.css'; // Importar el archivo CSS
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function QuienSoy() {
    const [text] = useTypewriter({
        words: ['Ingeniero', 'Informático', 'Visionario', 'Javier Nanco'],
        loop: [],
    });

    const words = [
        {
            id: 0,
            value: <h1>
                Soy estudiante de <strong>Ingeniería Civil en Computación mención Informática</strong> en la
                <strong> Universidad Tecnológica Metropolitana (UTEM)</strong>, actualmente enfocándome en el
                desarrollo Fullstack.<br/>
                Mi pasión por el aprendizaje me impulsa a buscar constantemente nuevas
                oportunidades para expandir mis <strong>conocimientos</strong> y mejorar mis <strong>capacidades</strong>, tanto
                a nivel académico como personal.<br />
                Creo firmemente en la importancia del crecimiento personal y profesional, por lo
                que cada día me esfuerzo por ser una <strong>mejor versión de mí mismo</strong>.
            </h1>
        },
        {
            id: 1,
            value: <h1>
                Dentro de mis especialidades se encuentran el desarrollo de aplicaciones web
                con <strong>Django</strong>, la programación en <strong>C++</strong> y la creación de interfaces dinámicas con <strong>React</strong>   .
                Estas habilidades me permiten entregar soluciones tecnológicas <strong>innovadoras</strong> y de <strong>alta calidad</strong>.</h1>
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0); // Estado para rastrear el índice activo
    const [wordData, setWordData] = useState(words[0].value); // Estado para almacenar el contenido actual

    const handleClick = (index) => {
        setActiveIndex(index); // Actualiza el índice activo
        setWordData(words[index].value); // Actualiza el contenido textual
    };

    return (
        <div id="quien-soy" className="flex flex-col justify-center items-center min-h-screen wrapper">
            <button onClick={() => {
                document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src="arrow/up.svg" alt="Desplazar hacia arriba" />
            </button>
            <div className="flex">
                <div>
                    <img src="JavierNanco.png" alt="Programador" className="mt-10 mr-10 h-48"/>
                </div>
                <div>
                    <h1 id="pregunta">
                        Soy  
                        <span className='Escritura' style={{ fontWeight: 'bold' }}> {text}</span> 
                        <span><Cursor/></span>
                    </h1>
                    <div className='parrafo'>{wordData}</div>
                </div>
            </div>
            <div className='puntos flex items-center mt-5'>
                {words.map((data, i) =>
                    <img
                        src={activeIndex === i ? "other-icon/PuntoLleno.svg" : "other-icon/PuntoVacio.svg"}
                        className='separacion'
                        key={i}
                        onClick={() => handleClick(i)}
                    />
                )}
            </div>
            <button onClick={() => {
                document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src="arrow/down.svg" alt="Desplazar hacia abajo" />
            </button>
        </div>
    );
}

export default QuienSoy;
