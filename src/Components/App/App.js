import './App.css';

import React, { useState } from 'react';


import Title from '../Title/Title';
import AddBar from '../AddBar/AddBar';
import ToDoList from '../ToDoList/ToDoList';

/*Mock up Data*/
import mockup from '../../util/mockup-data.js'

function App() {

  const [tasksList, setTasksList] = useState(mockup);

  return (

    <div className='App'>
      <Title text='My To Do List' />
      <ToDoList
        onDelete={() => { }}
        onToggleCheck={() => { }}
        tasksList={tasksList}
      />
      <AddBar onChange={() => { }} onAdd={() => { }} />
    </div>
  );
}

export default App;
