import React from 'react';
import Home from '../components/home';
import QuienSoy from './quien-soy';
import Proyectos from './proyectos';
import OtrosTrabajos from './otros-trabajos';
import End from './end';
import '../styles/main.css'; // Importar el archivo CSS

function MainContent() {
    return (
        <div>
            <Home/>
            <QuienSoy/>
            <Proyectos/>
            <OtrosTrabajos/>
            <End/>
        </div>
    );
}

export default MainContent;
