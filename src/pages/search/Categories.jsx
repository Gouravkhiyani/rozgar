import React from 'react';
import './search.css';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container-search">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;