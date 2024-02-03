// src/pages/index.js
import React from 'react';
import Link from 'next/link';
import '../styles.css';
import Header from '../components/Header';

const Home = () => {
  const logoSrc = "/flag4.png"; // Ajusta la ruta según la estructura de tu proyecto

  return (
    <div>
      <Header title="Quiz Game" logoSrc={logoSrc} altText="Logo" />
      <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
        <p className="text-lg mb-4">
          Welcome to the Quiz Game! Read the instructions below and click the "Start Game" button when you are ready to begin.
        </p>
        {/* Agrega cualquier otra información/instrucciones necesarias */}
        <Link href="/quiz">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Start Game</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;