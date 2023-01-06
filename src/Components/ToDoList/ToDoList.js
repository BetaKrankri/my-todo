import './ToDoList.css'

import React from 'react';
import PropTypes from 'prop-types';
import ToDoCard from '../ToDoCard/ToDoCard';


function ToDoList({
    tasksList = [],
    onDelete
} = {}) {

    return (
        <div className='ToDoList'>
            {tasksList.map(task => (
                <ToDoCard
                    task={task}
                    onDelete={onDelete} />
            ))}
        </div>
    );
}




ToDoList.propTypes = {
    todos: PropTypes.array,
    onDelete: PropTypes.func,
}

export default ToDoList;