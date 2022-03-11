import React from 'react';
import './Link.css';

export const Link = ({children, ...props}) => (
    <a className={`link`} {...props}>
        {children}
    </a>
)