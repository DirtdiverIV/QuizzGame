// src/pages/index.js
import React from 'react';
import Link from 'next/link';
import '../styles.css';
import Header from '../components/Header';

const Home = () => {
  const logoSrc = "/flag4.png"; 

  return (
    <div>
      <Header title="Galicia Quizz" logoSrc={logoSrc} altText="Logo" />
      <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-md">
      <h1 className="text-4xl font-bold mb-4">Instrucciones</h1>
        <img src="/flag4.png"></img>
        <p className="text-lg mb-4">
          ¡Bienvenido al Galicia Quizz! Aquí tienes las instrucciones para disfrutar del juego:
        </p>
        <p className="text-lg mb-4">
          1. El juego consta de 10 preguntas aleatorias.
        </p>
        <p className="text-lg mb-4">
          2. Tienes 10 segundos para responder cada pregunta.
        </p>
        <p className="text-lg mb-4">
          3. Haz clic en la opción que consideres correcta antes de que se agote el tiempo.
        </p>
        <p className="text-lg mb-4">
          ¡Prepárate para desafiar tus conocimientos! Haz clic en Comenzar Juego cuando estés listo.
        </p>
        <Link href="/quiz">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Empezar Juego</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;