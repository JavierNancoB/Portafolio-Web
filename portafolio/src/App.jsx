import React from 'react';
import Background from './components/background'; // Asegúrate de ajustar la ruta de importación según tu estructura de archivos
import Footer from './components/footer'; // Asumiendo que también tienes un componente para el pie de página
import Head from './components/head'; // Asumiendo que también tienes un componente para el encabezado
import MainContent from './components/main'; // Asumiendo que también tienes un componente para el contenido principal


function App() {
    return (
      <div className="App">
        <Head />
        <MainContent />
        <Footer />
        <Background/>
      </div>
    );
}

export default App;
