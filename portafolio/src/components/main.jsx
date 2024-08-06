import React from 'react';
import Home from '../components/home';
import QuienSoy from './quien-soy';
import '../styles/main.css'; // Importar el archivo CSS

function MainContent() {
    return (
        <div>
            <Home/>
            <QuienSoy/>
        </div>
    );
}

export default MainContent;
