import './ToDoCard.css';

import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';


function ToDoCard({

}) {
    return (
        <div className='ToDoCard'>
            <Checkbox />
            {/* <ToDo /> */}
            <Button
                actionIcon={'Delete'}
                size={'lg'}
                onClick={() => { }}
            />
        </div>
    );
}

export default ToDoCard;


