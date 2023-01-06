import './App.css';

import React, { useState } from 'react';


import Title from '../Title/Title';
import AddBar from '../AddBar/AddBar';
import ToDoList from '../ToDoList/ToDoList';

/*Mock up Data*/
import mockup from '../../util/mockup-data.js'

function App() {

  const [tasksList, setTasksList] = useState(mockup);

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

  return (
    <div className='App'>
      <Title text='My To Do List' />
      <ToDoList
        onDelete={deleteTask}
        onToggle={switchDoneTask}
        tasksList={tasksList}
      />
      <AddBar onChange={() => { }} onAdd={() => { }} />
    </div>
  );
}

export default App;
