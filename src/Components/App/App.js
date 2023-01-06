import './App.css';

import React, { useState } from 'react';


import Title from '../Title/Title';
import AddBar from '../AddBar/AddBar';
import ToDoList from '../ToDoList/ToDoList';

/*Mock up Data*/
import mockup from '../../util/mockup-data.js'

function App() {

  const [tasksList, setTasksList] = useState(mockup);
  const [input, setInput] = useState('');

  function switchDoneTask(taskId) {
    setTasksList(tasksList.map(task => {
      if (task.id === taskId) {
        let n = { ...task, done: !task.done }
        return n;
      }
      return task;
    }));
  }

  function deleteTask(taskId) {
    setTasksList(tasksList.filter(task => task.id !== taskId));
  }

  function handleChange({ target }) { 
    setInput(target.value);
  }

  function addTask() {
    if(!input.trim()) return;
    setTasksList(prev => [...prev, {
      id: randomId(),
      text: input,
      done: false
    }]);
    setInput('');
  }

  return (
    <div className='App'>
      <Title text='My To Do List' />
      <ToDoList
        onDelete={deleteTask}
        onToggle={switchDoneTask}
        tasksList={tasksList}
      />
      <AddBar
        input={input}
        onChange={handleChange}
        onAdd={addTask}
      />
    </div>
  );
}

function randomId() {
  return Math.floor(Math.random() * 10000 + 100);
}

export default App;
