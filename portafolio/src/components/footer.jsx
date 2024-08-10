// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="flex justify-end items-center p-4 w-full p-4 fixed bottom-0 w-full">
      <img src="/social-media-icon/WhatsApp.svg" className="mr-2" alt="WhatsApp icon" />
      <a href="https://www.linkedin.com/in/javier-nanco-40043126b/">
        <img src="/social-media-icon/LinkedIn.svg" className="mr-2" alt="LinkedIn icon" />
      </a>
      <a href="https://github.com/JavierNanco/">
        <img src="/social-media-icon/GitHub.svg" alt="GitHub icon" />
      </a>
      
    </footer>
  );
}

export default Footer;
