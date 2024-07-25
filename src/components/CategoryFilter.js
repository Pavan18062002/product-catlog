import React from 'react';
import '../App.css';

const CategoryFilter = ({ category, setCategory }) => {
  return (
    <select
      className="category-filter"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      <option value="fruits">Fruits</option>
      <option value="vegetables">Vegetables</option>
    </select>
  );
};

export default CategoryFilter;
