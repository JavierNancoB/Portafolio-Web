import React from 'react';
import '../styles/main.css'; // Importar el archivo CSS

function Home() {
    return (
        <div id="home" className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-1xl font-bold text-center">¡Hola! Mi nombre es</h1>
            <h1 id="name" className="name text-6xl font-bold  text-center">Javier Nanco</h1>
            <h1 className="text-1xl font-bold text-center"> encantado de conocerte 🥳.</h1>
            <button className="flex items-center mt-4 custom-bg custom-hover text-white font-bold py-2 px-5 rounded-xl">
                <p className="text-lg mr-2">Descargar CV</p>
                <img src="other-icon/download.svg" alt="modo noche icon" />
            </button>
            <button onClick={() => {
                document.getElementById('quien-soy').scrollIntoView({ behavior: 'smooth' });
                }}>
                <img  src="arrow/down.svg" alt="Desplazar hacia abajo" />
            </button>
        </div>
    );
}

export default Home;
