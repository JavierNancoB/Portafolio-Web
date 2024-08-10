import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-none [background-size:16px_16px]">
        {/* Gradientes y decoraciones adicionales para modo claro aquí */}
        {/* Nuevo fondo para modo oscuro */}
        <div className={`absolute top-0 z-[-2] h-screen w-screen dark:bg-[#000000] dark:bg-[radial-gradient(#474A51_1px,#2C3036_1px)] dark:bg-[size:20px_20px] hidden dark:block`}></div>
    </div>
  );
}

export default Background;