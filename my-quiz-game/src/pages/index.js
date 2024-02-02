// src/pages/index.js
import React from 'react';
import Quiz from '../components/Quiz';
import quizData from '../data/quizData';
import '../styles.css';  // Importa el archivo de estilos

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Quiz Game</h1>
      <Quiz questions={quizData} />
    </div>
  );
};

export default Home;