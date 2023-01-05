import './ToDoList.css'

import React from 'react';
import PropTypes from 'prop-types';
import ToDoCard from '../ToDoCard/ToDoCard';


function ToDoList({
    onDelete
}) {
    return ( 
        <div className='ToDoList'>
            <ToDoCard />           
            <ToDoCard />           
        </div>
     );
}

export default ToDoList;