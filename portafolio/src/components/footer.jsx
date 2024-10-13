// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="flex justify-end items-center p-4 w-full fixed bottom-0">
      <a href="https://www.linkedin.com/in/javier-nanco-40043126b/">
        <img src={`${process.env.PUBLIC_URL}/social-media-icon/LinkedIn.svg`} className="mr-2" alt="LinkedIn icon" />
      </a>
      <a href="https://github.com/JavierNanco/">
        <img src={`${process.env.PUBLIC_URL}/social-media-icon/GitHub.svg`} alt="GitHub icon" />
      </a>
    </footer>
  );
}

export default Footer;
