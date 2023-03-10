import './ToDoCard.css';

import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';


function ToDoCard({
    task = 'A To Do goes here',
    onDelete,
    onToggle
} = {}) {
    return (
        <div className='ToDoCard'>
            <Checkbox
                onToggle={() => {
                    onToggle(task.id)
                }}
                isDone={task.done} />

            <div className='toDoLabel'>
                <p data-done={(task.done)} >{task.text}</p>
            </div>

            <Button
                actionIcon='Delete'
                size='lg'
                onClick={() => { onDelete(task.id) }}
            />
        </div>
    );
}

ToDoCard.prtopTypes = {
    task: PropTypes.string,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func
}

export default ToDoCard;


