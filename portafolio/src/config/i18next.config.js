import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // Pasa la instancia de i18n a react-i18next
  .use(Backend) // Usa el backend http para cargar las traducciones
  .init({
    fallbackLng: 'en',
    lng: 'es', // Idioma inicial
    backend: {
      // Ruta hacia los recursos de traducción
      loadPath: '/Portafolio-Web/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['end', 'home', 'proyectos', 'quien-soy'], // Espacios de nombres usados en tu aplicación
    defaultNS: 'home', // Espacio de nombres por defecto
    debug: true, // Activa la depuración para ver detalles en la consola
    interpolation: {
      escapeValue: false // No necesita escapar valores en React
    }
  });

