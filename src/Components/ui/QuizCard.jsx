import React from 'react';

const QuizCard = ({ quiz }) => {
  return (
    <div className="featured-quiz-card">
      <div className="quiz-tags">
        <span className={`category-tag ${quiz.categoryClass}`}>{quiz.category}</span>
        <span className={`difficulty-tag ${quiz.difficultyClass}`}>{quiz.difficulty}</span>
      </div>
      <div className="quiz-image"></div>
      <h3 className="featured-quiz-title">{quiz.title}</h3>
      <p className="featured-quiz-description">{quiz.description}</p>
      <div className="quiz-footer">
        <div className="quiz-time">{quiz.duration}</div>
        <button className="quiz-start-btn">Start Quiz</button>
      </div>
    </div>
  );
};

export default QuizCard;