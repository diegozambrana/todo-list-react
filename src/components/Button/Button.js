import React from 'react';
import './Button.css';

export const Button = ({value, danger,...props}) => {

    return (
        <button className={`button ${danger ? 'danger' : ''}`} {...props}>{value}</button>
    )
}