import React from 'react';
import { Link } from 'react-router-dom';
import QuizCard from '../ui/QuizCard';
import { featuredQuizzes } from '../../data/featuredQuizzes';

const FeaturedQuizzes = () => {
  return (
    <div className="featured-section">
      <div className="featured-header">
        <h2>Featured Quizzes</h2>
        <Link to="/quizzes" className="view-all-btn">View All</Link>
      </div>
      <div className="quiz-grid">
        {featuredQuizzes.map(quiz => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedQuizzes;