import './AddBar.css'

import React from 'react';
import PropTypes from 'prop-types';


import Button from '../Button/Button';

function AddBar({
    input,
    onChange,
    onAdd
}) {
    return (
        <div className='AddBar'>
            <Button
                actionIcon='Add'
                onClick={onAdd} />
            <input
                type='text'
                placeholder='Add a new ToDo'
                value={input}
                onChange={onChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') onAdd();
                }}
            />
        </div>
    );
}

AddBar.propTypes = {
    onChange: PropTypes.func,
    onAdd: PropTypes.func,
}

export default AddBar;