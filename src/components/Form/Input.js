import React from 'react';
import './Input.css'

export const Input = ({value, onChange, placeholder, fullWidth}) => {
  const handleChange = (event) => {
    if(onChange) onChange(event.target.value);
  }


  return (
    <div className={`input-container ${fullWidth ? 'full-width' : ''}`}>
      <input
        className='input-text'
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>  
  )
}