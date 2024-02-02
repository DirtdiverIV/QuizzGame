// components/InstructionsComponent.js
import React from 'react';

const InstructionsComponent = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-md">
      <h1 className="text-3xl font-bold mb-4">Instructions</h1>
      <p className="text-lg mb-4">
        Welcome to the Quiz Game! Read the instructions below and click the "Start" button when you are ready to begin.
      </p>
      {/* Agrega cualquier otra información/instrucciones necesarias */}
    </div>
  );
};

export default InstructionsComponent;