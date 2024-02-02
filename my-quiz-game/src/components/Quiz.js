// components/Quiz.js
import React, { useState } from 'react';
import '../styles.css'; 

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

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-md">
      {showScore ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Score: {score} / {questions.length}</h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={resetQuiz}
          >
            Start Over
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-2">Question {currentQuestion + 1}:</h2>
          <p className="text-lg mb-4">{questions[currentQuestion].question}</p>
          {questions[currentQuestion].answers.map((answer, index) => (
            <button
              key={index}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 mb-2"
              onClick={() => handleAnswerClick(answer.isCorrect)}
            >
              {answer.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;