// src/index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/tailwind.css';
import './config/i18next.config';

const container = document.getElementById('root');

// Crea la raíz con createRoot
const root = createRoot(container);

// Renderiza tu componente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);