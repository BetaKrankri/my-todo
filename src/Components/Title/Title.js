import './Title.css';
import React from 'react';

function Title({text}) {
    return ( 
        <div className='Title'>
            {text}
        </div>
     );
}

export default Title;