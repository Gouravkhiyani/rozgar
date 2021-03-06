import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center-people-search'>
      {items.map((menuItem) => {
        const { id, name, img, contact, category, rating  } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={name} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{name}</h4>
                <h4 className='price'>{rating}*</h4>
              </header>
              
              <p className="item-text">{category}</p>
              <p className='item-text'>{contact}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;