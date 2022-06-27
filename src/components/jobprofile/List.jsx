import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className='job-list'>
      {
        items.map((item) => {
          const { id, job, location, date } = item;
          return (
            <div className='job-item' key={id}>
              <p className='job-title'>{job}</p>
              <p className='job-profile' >{location}</p>
              <p className='job-date' >{date}</p>
              <div className='btn-container'>
                <button
                  type='button'
                  className='edit-btn'
                  onClick={() => editItem(id)}
                >
                  <FaEdit />
                </button>
                <button
                  type='button'
                  className='delete-btn'
                  onClick={() => removeItem(id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default List;