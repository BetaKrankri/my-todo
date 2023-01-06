import './ToDo.css'

import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox/Checkbox';



function ToDo({
    styles = {},
    text = 'Here goes a To·Do'
} = {}) {
    return ( 
        <div className='ToDo' style={styles}>
            
            <p className='todoText'>{text}</p>
        </div>
     );
}

export default ToDo;