// components/Header.js
import React from 'react';

const Header = ({ title, logoSrc, altText }) => {
  return (
    <header className="bg-blue-500 text-white p-4 flex items-center">
      <img src={logoSrc} alt={altText} className="h-12 w-auto mr-4" /> {/* Ajusta estilos según tus necesidades */}
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;