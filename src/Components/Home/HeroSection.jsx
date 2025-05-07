import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Challenge Your Mind <br />
          <span className="with">with</span> <span className="brand-name">BrainBattle</span>
        </h1>
        <p className="hero-description">
          Test your knowledge across various categories, compete with
          friends, and climb global leaderboards in the ultimate trivia
          experience.
        </p>
        <div className="hero-buttons">
          <Link to="/quizzes" className="start-btn">Start Quizzing</Link>
          <Link to="/leaderboard" className="leaderboard-btn">View Leaderboards</Link>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">1000+</span> Quizzes
          </div>
          <div className="stat">
            <span className="stat-number">50,000+</span> Questions
          </div>
          <div className="stat">
            <span className="stat-number">10,000+</span> Players
          </div>
        </div>
      </div>
      <div className="quiz-preview">
        <div className="quiz-card">
          <h3 className="quiz-title">World History Quiz</h3>
          <div className="quiz-question">
            <p>Which ancient civilization built the Machu Picchu complex in Peru?</p>
            <div className="quiz-options">
              <button className="option-btn">Aztec Empire</button>
              <button className="option-btn selected">Inca Empire</button>
              <button className="option-btn">Mayan Civilization</button>
              <button className="option-btn">Olmec Civilization</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;