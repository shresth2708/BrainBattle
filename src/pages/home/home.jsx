import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import QuizCard from '../../components/card/card.jsx';
import { FaHistory, FaFlask, FaGamepad, FaGlobe, FaMusic, FaCalculator } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Brain Battle</h1>
        <p>Challenge Your Mind, Climb the Rankings</p>
        <Link to="/quizzes" className="cta-button">Start Quiz</Link>
      </section>

      {/* Featured Quizzes Section */}
      <section className="featured-quizzes">
        <h2>Featured Quizzes</h2>
        <div className="quiz-grid">
          {[1, 2, 3].map((quiz) => (
            <QuizCard key={quiz} quiz={{ id: quiz, title: `Quiz ${quiz}`, description: `Description for Quiz ${quiz}`, imageUrl: 'https://via.placeholder.com/150', difficulty: 'easy', questionCount: 10, timeLimit: 5 }} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      {/* <section className="categories-section">
        <h2>Quiz Categories</h2>
        <div className="categories-grid">
          {[
            { icon: <FaHistory />, name: 'History', count: '25+' },
            { icon: <FaFlask />, name: 'Science', count: '30+' },
            { icon: <FaGamepad />, name: 'Gaming', count: '20+' },
            { icon: <FaGlobe />, name: 'Geography', count: '15+' },
            { icon: <FaMusic />, name: 'Music', count: '28+' },
            { icon: <FaCalculator />, name: 'Math', count: '22+' },
            { icon: <FaFilm />, name: 'Movies', count: '18+' },
            { icon: <FaFootballBall />, name: 'Sports', count: '24+' },
            { icon: <FaCode />, name: 'Technology', count: '20+' }
          ].map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.count} Quizzes</p>
            </div>
          ))}
        </div>
      </section> */}
      
    </div>
  );
};

export default Home;