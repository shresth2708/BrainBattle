import React from 'react';
import { useNavigate } from 'react-router-dom';
import './card.css';

const QuizCard = ({ quiz }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/quiz/${quiz.id}`);
  };

  return (
    <div className="quiz-card" onClick={handleClick}>
      <div className="quiz-card-image">
        <img src={quiz.imageUrl} alt={quiz.title} />
        <span className={`difficulty-badge ${quiz.difficulty}`}>
          {quiz.difficulty}
        </span>
      </div>
      <div className="quiz-card-content">
        <h3>{quiz.title}</h3>
        <p>{quiz.description}</p>
        <div className="quiz-card-footer">
          <span>{quiz.questionCount} Questions</span>
          <span>{quiz.timeLimit} mins</span>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;