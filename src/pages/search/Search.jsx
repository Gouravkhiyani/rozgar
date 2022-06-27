import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './Data';
import './search.css';
import Navbar from '../../components/navbar/Navbar';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function Search() {
  const [searchItems, setSearchItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setSearchItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setSearchItems(newItems);
  };

  return (
    <>
    <div className="gradient__bg">
        <Navbar/>
      </div>
      
      <section className="menu search_section">
        <div className="title-search">
          <h2>Search for jobs according to your skillset</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <div className="underline"></div>
        <Menu items={searchItems} />
      </section>
    </>
  );
}

export default Search;