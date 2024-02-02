// src/pages/quiz.js
import React from 'react';
import Header from '../components/Header';
import Quiz from '../components/Quiz';
import quizData from '../data/quizData';

const QuizPage = () => {
  return (
    <div>
      <Header title="Quiz Game" />
      <Quiz questions={quizData} />
    </div>
  );
};

export default QuizPage;