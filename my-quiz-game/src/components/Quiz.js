import React, { useState, useEffect, useRef } from 'react';
import '../styles.css';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const timerRef = useRef();

  useEffect(() => {
    if (timeLeft > 0 && currentQuestion < questions.length && !showScore) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            handleNextQuestion();
            return 10;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      handleNextQuestionWithDelay();
    }

    return () => clearInterval(timerRef.current);
  }, [currentQuestion, questions, showScore, timeLeft]);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    clearInterval(timerRef.current);
    setTimeLeft(10);
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleNextQuestionWithDelay = () => {
    // Aumentar el retraso antes de cambiar a la siguiente pregunta
    setTimeout(handleNextQuestion, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimeLeft(10);
  };

  const progressWidth = ((10 - timeLeft) / 10) * 100;

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 h-1/2 p-8 bg-white shadow-lg rounded-md">
        {showScore ? (
          <div>
            <h2 className="text-3xl font-bold mb-4">Your Score: {score} / {questions.length}</h2>
            <button
              className="text-lg bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={resetQuiz}
            >
              Start Over
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-2">Question {currentQuestion + 1}:</h2>
            {/* Renderizar la imagen si está presente */}
            {questions[currentQuestion].image && (
              <img
                src={questions[currentQuestion].image}
                alt={`Question ${currentQuestion + 1}`}
                className="mb-4 rounded-md"
              />
            )}
            <p className="text-lg mb-4">{questions[currentQuestion].question}</p>
            <div className="mb-4">
              <div className="relative pt-1">
                <div className="flex flex-col w-full">
                  <div
                    style={{ width: '100%' }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  >
                    <div
                      style={{ width: `${progressWidth}%` }}
                      className="h-2 bg-blue-700 transition-width duration-1000"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              {questions[currentQuestion].answers.map((answer, index) => (
                <button
                  key={index}
                  className="text-lg bg-blue-500 text-white px-4 py-2 rounded-md mb-2"
                  onClick={() => handleAnswerClick(answer.isCorrect)}
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
