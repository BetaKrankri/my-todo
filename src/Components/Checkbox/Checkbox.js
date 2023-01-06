import './Checkbox.css'

import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({
    isDone,
    onToggle
}) {
    return (
        <div className='Checkbox'>
            <input type='checkbox'
                className='cb'
                onChange={onToggle}
                checked={isDone}/>
        </div>
    );
}

Checkbox.propTypes = {
    isDone: PropTypes.bool,
    onToggle: PropTypes.func
}

export default Checkbox;