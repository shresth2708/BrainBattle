import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
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
            <button className="start-btn">Start Quizzing</button>
            <button className="leaderboard-btn">View Leaderboards</button>
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

      {/* Featured Quizzes Section */}
      <div className="featured-section">
        <div className="featured-header">
          <h2>Featured Quizzes</h2>
          <button className="view-all-btn">View All</button>
        </div>
        <div className="quiz-grid">
          {/* Quiz Card 1 */}
          <div className="featured-quiz-card">
            <div className="quiz-tags">
              <span className="category-tag history">History</span>
              <span className="difficulty-tag medium">Medium</span>
            </div>
            <div className="quiz-image"></div>
            <h3 className="featured-quiz-title">World History Essentials</h3>
            <p className="featured-quiz-description">
              Test your knowledge about key historical events and figures
            </p>
            <div className="quiz-footer">
              <div className="quiz-time">5 minutes</div>
              <button className="quiz-start-btn">Start Quiz</button>
            </div>
          </div>

          {/* Quiz Card 2 */}
          <div className="featured-quiz-card">
            <div className="quiz-tags">
              <span className="category-tag science">Science & Nature</span>
              <span className="difficulty-tag hard">Hard</span>
            </div>
            <div className="quiz-image"></div>
            <h3 className="featured-quiz-title">Space Exploration</h3>
            <p className="featured-quiz-description">
              Explore the cosmos with this challenging astronomy quiz
            </p>
            <div className="quiz-footer">
              <div className="quiz-time">5 minutes</div>
              <button className="quiz-start-btn">Start Quiz</button>
            </div>
          </div>

          {/* Quiz Card 3 */}
          <div className="featured-quiz-card">
            <div className="quiz-tags">
              <span className="category-tag entertainment">Entertainment</span>
              <span className="difficulty-tag easy">Easy</span>
            </div>
            <div className="quiz-image"></div>
            <h3 className="featured-quiz-title">Pop Culture Trivia</h3>
            <p className="featured-quiz-description">
              Test your knowledge of movies, music, and celebrities
            </p>
            <div className="quiz-footer">
              <div className="quiz-time">4 minutes</div>
              <button className="quiz-start-btn">Start Quiz</button>
            </div>
          </div>

          {/* Quiz Card 4 */}
          <div className="featured-quiz-card">
            <div className="quiz-tags">
              <span className="category-tag sports">Sports</span>
              <span className="difficulty-tag medium">Medium</span>
            </div>
            <div className="quiz-image"></div>
            <h3 className="featured-quiz-title">Sports Champions</h3>
            <p className="featured-quiz-description">
              How much do you know about legendary sports figures?
            </p>
            <div className="quiz-footer">
              <div className="quiz-time">3 minutes</div>
              <button className="quiz-start-btn">Start Quiz</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Explore Quiz Categories Section */}
      <div className="categories-section">
        <h2 className="section-title">Explore Quiz Categories</h2>
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-icon purple">G</div>
            <p className="category-name">General Knowledge</p>
          </div>
          
          <div className="category-card">
            <div className="category-icon blue">S</div>
            <p className="category-name">Science & Nature</p>
          </div>
          
          <div className="category-card">
            <div className="category-icon orange">H</div>
            <p className="category-name">History</p>
          </div>
          
          <div className="category-card">
            <div className="category-icon purple">E</div>
            <p className="category-name">Entertainment</p>
          </div>
          
          <div className="category-card">
            <div className="category-icon green">S</div>
            <p className="category-name">Sports</p>
          </div>
          
          <div className="category-card">
            <div className="category-icon orange">G</div>
            <p className="category-name">Geography</p>
          </div>
          
          <div className="category-card">
            <div className="category-icon pink">A</div>
            <p className="category-name">Arts</p>
          </div>
          
          <div className="category-card">
            <div className="category-icon purple-blue">L</div>
            <p className="category-name">Literature</p>
          </div>
          
          <div className="category-card">
            <div className="category-icon blue">T</div>
            <p className="category-name">Technology</p>
          </div>
        </div>
      </div>
      
      {/* Top Players Leaderboard Section */}
      <div className="leaderboard-section">
        <div className="leaderboard-header">
          <h2>Top Players</h2>
          <button className="view-all-btn">Full Leaderboard</button>
        </div>
        
        <div className="leaderboard-table">
          <div className="leaderboard-head">
            <div className="rank-col">Rank</div>
            <div className="player-col">Player</div>
            <div className="quizzes-col">Quizzes</div>
            <div className="score-col">Score</div>
          </div>
          
          <div className="leaderboard-row">
            <div className="rank-col">
              <span className="trophy">🏆</span> 1
            </div>
            <div className="player-col">
              <div className="player-avatar"></div>
              <div className="player-name">QuizMaster</div>
            </div>
            <div className="quizzes-col">42</div>
            <div className="score-col">9,750</div>
          </div>
          
          <div className="leaderboard-row">
            <div className="rank-col">2</div>
            <div className="player-col">
              <div className="player-avatar"></div>
              <div className="player-name">HistoryBuff</div>
            </div>
            <div className="quizzes-col">36</div>
            <div className="score-col">8,900</div>
          </div>
          
          <div className="leaderboard-row">
            <div className="rank-col">3</div>
            <div className="player-col">
              <div className="player-avatar"></div>
              <div className="player-name">ScienceNerd</div>
            </div>
            <div className="quizzes-col">34</div>
            <div className="score-col">8,450</div>
          </div>
          
          <div className="leaderboard-row">
            <div className="rank-col">4</div>
            <div className="player-col">
              <div className="player-avatar"></div>
              <div className="player-name">TriviaKing</div>
            </div>
            <div className="quizzes-col">30</div>
            <div className="score-col">7,800</div>
          </div>
          
          <div className="leaderboard-row">
            <div className="rank-col">5</div>
            <div className="player-col">
              <div className="player-avatar"></div>
              <div className="player-name">KnowledgeSeeker</div>
            </div>
            <div className="quizzes-col">28</div>
            <div className="score-col">7,200</div>
          </div>
        </div>
        
        <div className="view-more-container">
          <a href="/leaderboard" className="view-more-link">View Complete Leaderboard</a>
        </div>
      </div>
    </div>
  );
};

export default Home;