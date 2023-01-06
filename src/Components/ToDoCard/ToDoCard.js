import './ToDoCard.css';

import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';


function ToDoCard({
    task = 'A To Do goes here',
    onDelete
} = {}) {
    return (
        <div className='ToDoCard'>
            <Checkbox onToggle={() => {}}/>

            <div className='toDoLabel'>
                <p>{task.text}</p>
            </div>

            <Button
                actionIcon='Delete'
                size='lg'
                onClick={onDelete}
            />
        </div>
    );
}

export default ToDoCard;


