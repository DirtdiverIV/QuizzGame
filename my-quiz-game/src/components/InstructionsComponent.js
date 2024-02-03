// components/InstructionsComponent.js
import React from 'react';
import instructionsImage from '../public/flag4.png'; // Ajusta la ruta según la ubicación real de la imagen

const InstructionsComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-2xl p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-4xl font-bold mb-4">Instructions</h1>
        <img
          src={instructionsImage}
          alt="Instructions Image"
          className="mb-4 rounded-md"
        />
        <p className="text-lg mb-4">
          Welcome to the Quiz Game! Read the instructions below and click the "Start" button when you are ready to begin.
        </p>
        <p className="text-red-500">This is a new paragraph for testing purposes.</p>
      </div>
    </div>
  );
};

export default InstructionsComponent;
