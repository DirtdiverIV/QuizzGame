// pages/index.js
import React from 'react';
import Quiz from '../components/Quiz';
import quizData from '../data/quizData';

const Home = () => {
  return (
    <div>
      <h1>Quiz Game</h1>
      <Quiz questions={quizData} />
    </div>
  );
};

export default Home;