import './AddBar.css'

import React from 'react';
import Button from '../Button/Button';

function AddBar({}) {
    return ( 
        <div className='AddBar'>
            <Button />
            <input 
                type='text' 
                placeholder='Add a new Task' />
            
        </div>
     );
}

export default AddBar   ;