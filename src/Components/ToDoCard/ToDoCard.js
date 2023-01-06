import './ToDoCard.css';

import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';


function ToDoCard({
    todo = 'A To Do goes here'
} = {}) {
    return (
        <div className='ToDoCard'>
            <Checkbox />

            <div className='toDoLabel'>
                <p>{todo}</p>
            </div>

            <Button
                actionIcon={'Delete'}
                size={'lg'}
                onClick={() => { }}
            />
        </div>
    );
}

export default ToDoCard;


