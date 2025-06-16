import React from 'react';
import './../styles/Home.css';
import hero_image from './../assets/hero.jpeg';
import gkImg from './../assets/categories_image/gk.jpeg';
import scienceImg from './../assets/categories_image/Science.jpeg';
import historyImg from './../assets/categories_image/history.jpeg';
import geographyImg from './../assets/categories_image/Geography.jpeg';
import moviesImg from './../assets/categories_image/movies.jpeg';
import sportsImg from './../assets/categories_image/Sports.jpeg';
import musicImg from './../assets/categories_image/Music.jpeg';
import artImg from './../assets/categories_image/Art.jpeg';
import technologyImg from './../assets/categories_image/Technology.jpeg';
import literatureImg from './../assets/categories_image/Literature.jpeg';
import foodImg from './../assets/categories_image/food.jpeg';
import animalImg from './../assets/categories_image/animal.jpeg';

const Home = () => {


  const categories = [
    { id: 1, name: 'General Knowledge', description: 'A mix of everything!', image: gkImg },
    { id: 2, name: 'Science', description: 'Test your knowledge of the world of science.', image: scienceImg },
    { id: 3, name: 'History', description: 'How well do you know the past?', image: historyImg },
    { id: 4, name: 'Geography', description: 'Explore the world’s countries, capitals, and landmarks.', image: geographyImg },
    { id: 5, name: 'Movies', description: 'For the ultimate movie buffs!', image: moviesImg },
    { id: 6, name: 'Sports', description: 'Are you a sports expert? Test your knowledge!', image: sportsImg },
    { id: 7, name: 'Music', description: 'Can you name that tune? Find out here.', image: musicImg },
    { id: 8, name: 'Art & Culture', description: 'Dive into the world of art, literature, and culture.', image: artImg },
    { id: 9, name: 'Technology', description: 'How tech-savvy are you? Take the challenge!', image: technologyImg },
    { id: 10, name: 'Literature', description: 'Test your knowledge of books and authors.', image: literatureImg },
    { id: 11, name: 'Food & Drink', description: 'How much do you know about culinary delights?', image: foodImg },
    { id: 12, name: 'Animals', description: 'From pets to wild creatures, how much do you know?', image: animalImg }
  ];

  
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className='hero_content'>
          <h1>Welcome to BrainBattle </h1>
          <h3>Think Fast. Battle Smart. Rule the Quiz Arena</h3>
        </div>
        <img src={hero_image} alt='hero_image' />
      </section>

      <section className="categories-section">
        <h2>Quiz Categories</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <div key={category.id} className="category-card">
              <div className="category-image">
                <img src={category.image} alt={category.name} />
              </div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <button 
                className="play-button"
                
              >
                Play {category.name}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
