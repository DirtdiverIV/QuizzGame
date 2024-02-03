// src/pages/quiz.js
import React from 'react';
import Header from '../components/Header';
import Quiz from '../components/Quiz';
import quizData from '../data/quizData';


const logoSrc = "flag4.png"; 

const QuizPage = () => {
  return (
    <div>
      <Header title="Galicia Quizz" logoSrc={logoSrc} altText="Logo" />
      <Quiz questions={quizData} />
    </div>
  );
};

export default QuizPage;