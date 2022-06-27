import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import './job.css'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};


function App() {
  const [job, setJob] = useState('');
  const [location,setLocation]=useState('');
  const [date,setDate]=useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!job || !location || !date) {
      showAlert(true, 'danger', 'please enter value');
    } else if (job && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, job: job,location: location,date:date };
          }
          return item;
        })
      );
      setJob('');
      setLocation('');
      setDate('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      showAlert(true, 'success', 'job added to the list');
      const newItem = { id: new Date().getTime().toString(), job: job,location: location,date:date };

      setList([...list, newItem]);
      setLocation('');
      setJob('');
      setDate('');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setJob(specificItem.job);
    setLocation(specificItem.location);
    setDate(specificItem.date);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h3>Jobs Required</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='Job'
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
          <input
            type='date'
            className='grocery'
            placeholder='From Date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type='text'
            className='grocery'
            placeholder='Location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;