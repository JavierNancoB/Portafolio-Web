import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/head.css';

function Head() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [isActive, setIsActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Actualiza el idioma y el modo oscuro
  useEffect(() => {
    i18n.changeLanguage(language);
    document.body.classList.toggle('dark', isDarkMode);
  }, [language, isDarkMode, i18n]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
    setIsActive(!isActive); // Cambia el estado de isActive
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Cambia el estado de isDarkMode
  };

  return (
    <header className="flex justify-end items-center p-4 w-full fixed">
      <button id='translate' onClick={toggleLanguage} className={isActive ? 'active' : ''}>
        <img src={`${process.env.PUBLIC_URL}/other-icon/translate.svg`} className="mr-2" alt="Translate icon" />
      </button>
      <button id='dark-mode' onClick={toggleDarkMode} className={isDarkMode ? 'active' : ''}>
        <img src={`${process.env.PUBLIC_URL}/other-icon/night.svg`} alt="Night mode icon" />
      </button>
    </header>
  );
}

export default Head;
