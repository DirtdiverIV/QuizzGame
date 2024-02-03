// components/InstructionsComponent.js
import React from 'react';
import instructionsImage from '../public/flag4.png'; // Ajusta la ruta según la ubicación real de la imagen

const InstructionsComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-4xl font-bold mb-4">Instrucciones</h1>
        <p className="text-lg mb-4">
          ¡Bienvenido al Juego de Preguntas! Aquí tienes las instrucciones para disfrutar del juego:
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
          ¡Prepárate para desafiar tus conocimientos! Haz clic en "Comenzar Juego" cuando estés listo.
        </p>
      </div>
    </div>
  );
};

export default InstructionsComponent;
