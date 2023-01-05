import './Button.css'

import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark, faIcons } from '@fortawesome/free-solid-svg-icons'

function Button({
    onClick,
    actionIcon = 'fa',
    size = '2xl'
} = {}) {

    return (
        <div className='Button'
            onClick={onClick}>
            <div className='icon'>
                <FontAwesomeIcon size={size} icon={icon(actionIcon)} />
            </div>
        </div>
    );
}

function icon(actionIcon) {
    let icon = faIcons;
    switch (actionIcon) {
        case 'Add':
            icon = faPlus;
            break;
        case 'Delete':
            icon = faXmark;
            break;
        case 'fa':
            icon = faIcons;
            break;
    }
    return icon;
}

Button.propTypes = {
    onClick: PropTypes.func,
    actionIcon: PropTypes.oneOf(['Add', 'Delete', 'fa']),
    size: PropTypes.oneOf(['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'])
}

export default Button;