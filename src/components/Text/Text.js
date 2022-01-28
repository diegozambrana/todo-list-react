import React from 'react';
import './Text.css';

export const Text = ({text, type, gray, center, fontWeight}) => {

    let styles = {};

    if(fontWeight) styles['fontWeight'] = fontWeight
    if(gray) styles['color'] = 'gray'
    if(center) styles['textAlign'] = 'center';

    if(type === 'title'){
        return (<h2 className='title'>{text}</h2>)
    }
    if(type === 'sub-title'){
        return (<h3 className='sub-title'>{text}</h3>)
    }
    if(type === 'sub-sub-title'){
        return (<h4 className='sub-sub-title'>{text}</h4>)
    }
    return (<p className='body-text' style={styles}>{text}</p>)
}