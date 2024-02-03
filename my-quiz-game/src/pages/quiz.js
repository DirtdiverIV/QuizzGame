// src/pages/quiz.js
import React from 'react';
import Header from '../components/Header';
import Quiz from '../components/Quiz';
import quizData from '../data/quizData';

// Definir la ruta de la imagen para el logo
const logoSrc = "flag4.png"; // Ajusta la ruta según la estructura de tu proyecto

const QuizPage = () => {
  return (
    <div>
      <Header title="Quiz Game" logoSrc={logoSrc} altText="Logo" />
      <Quiz questions={quizData} />
    </div>
  );
};

export default QuizPage;