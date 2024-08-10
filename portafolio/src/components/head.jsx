import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/head.css';

function Head() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [isActive, setIsActive] = useState(false); // Estado para controlar el color del botón

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]); // Simplificado para eliminar la dependencia innecesaria

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    setIsActive(!isActive); // Cambia el estado de isActive al presionar el botón
  };

  return (
    <header className="flex justify-end items-center p-4 w-full fixed">
      <button id='translate' onClick={toggleLanguage} className={isActive ? 'active' : ''}>
        <img src="other-icon/translate.svg" className="mr-2" alt="Translate icon" />
      </button>
      <img src="other-icon/night.svg" alt="Night mode icon" />
    </header>
  );
}

export default Head;
