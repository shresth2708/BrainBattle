import React from 'react';
import HeroSection from '../../Components/Home/HeroSection';  // Fixed capital C
import FeaturedQuizzes from '../../Components/Home/FeaturedQuizzes'; // Fixed capital C
import QuizCategories from '../../Components/Home/QuizCategories'; // Fixed capital C
import TopLeaderboard from '../../Components/Home/TopLeaderboard'; // Fixed capital C
import '../../Components/Home/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <FeaturedQuizzes />
      <QuizCategories />
      <TopLeaderboard />
    </div>
  );
};

export default Home;