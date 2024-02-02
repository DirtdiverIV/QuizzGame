// components/Quiz.js
import React, { useState } from 'react';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h2>Your Score: {score} / {questions.length}</h2>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion + 1}:</h2>
          <p>{questions[currentQuestion].question}</p>
          {questions[currentQuestion].answers.map((answer, index) => (
            <button key={index} onClick={() => handleAnswerClick(answer.isCorrect)}>
              {answer.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;