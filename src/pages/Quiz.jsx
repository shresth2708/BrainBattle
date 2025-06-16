import { useState, useEffect } from 'react';
import quizData from '../assets/quiz.json';
import '../styles/Quiz.css'; 

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // Load quiz data
    setQuestions(quizData);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    // Check if answer is correct
    if (selectedOption === questions[currentQuestionIndex]?.correctAnswer) {
      setScore(score + 1);
    }

    // Move to next question or show score
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
      setSelectedOption('');
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption('');
  };

  if (questions.length === 0) {
    return <div className="quiz-container">Loading quiz...</div>;
  }

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Quiz Completed!</h2>
          <p>
            You scored {score} out of {questions.length}
          </p>
          <button className="restart-button" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestionIndex + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestionIndex]?.question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestionIndex]?.options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${selectedOption === option ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="next-button"
            disabled={!selectedOption}
            onClick={handleNextQuestion}
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </>
      )}
    </div>
  );
}

export default Quiz;
