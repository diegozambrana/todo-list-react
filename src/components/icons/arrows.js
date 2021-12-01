import React from 'react';
import './arrows.css';

export const Arrow = ({direction, pointer}) => (
    <div
        className={`arrow ${
            direction === 'up' ? 'arrow-up' : 'arrow-down'
        } ${pointer ? 'pointer' : ''}`}
    />
)