import './ToDoList.css'

import React from 'react';
import PropTypes from 'prop-types';
import ToDoCard from '../ToDoCard/ToDoCard';


function ToDoList({
    tasksList = [],
    onDelete,
    onToggle,
} = {}) {

    return (
        <div className='ToDoList'>
            {tasksList.map(task => (
                <ToDoCard
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle} />
            ))}
        </div>
    );
}




ToDoList.propTypes = {
    todos: PropTypes.array,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func,

}

export default ToDoList;