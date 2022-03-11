import React from 'react';
import './Button.css';

export const Button = ({value, danger, secondary, full, large, ...props}) => {
    const className = `button ${
        danger ? 'danger' : ''
    } ${
        full ? 'full' : ''
    } ${
        secondary ? 'secondary' : ''
    } ${
        large ? 'large' : ''
    }`

    return (
        <button className={className} {...props}>
            {value}
        </button>
    )
}