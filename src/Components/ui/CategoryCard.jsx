import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <div className={`category-icon ${category.color}`}>{category.icon}</div>
      <p className="category-name">{category.name}</p>
    </div>
  );
};

export default CategoryCard;