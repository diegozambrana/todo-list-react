import React from 'react';
import './arrows.css';

export const Arrow = ({direction, pointer, onClickArrow}) => (
    <div
        className={`arrow ${
            direction === 'up' ? 'arrow-up' : 'arrow-down'
        } ${pointer ? 'pointer' : ''}`}
        onClick={() => onClickArrow ? onClickArrow() : null}
    />
)