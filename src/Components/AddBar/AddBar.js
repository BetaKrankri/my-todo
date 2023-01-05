import './AddBar.css'

import React from 'react';
import PropTypes from 'prop-types';


import Button from '../Button/Button';

function AddBar({
    onChange,
    onAdd
}) {
    return (
        <div className='AddBar'>
            <Button
                actionIcon='Add'
                onClick={onAdd} />
            <input
                onChange={onChange}
                type='text'
                placeholder='Add a new ToDo' />

        </div>
    );
}

AddBar.propTypes = {
    onChange: PropTypes.func,
    onAdd: PropTypes.func,
}

export default AddBar;