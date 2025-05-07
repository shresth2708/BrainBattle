import React from 'react';
import CategoryCard from '../ui/CategoryCard';
import { categories } from '../../data/categories';

const QuizCategories = () => {
  return (
    <div className="categories-section">
      <h2 className="section-title">Explore Quiz Categories</h2>
      <div className="categories-grid">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default QuizCategories;