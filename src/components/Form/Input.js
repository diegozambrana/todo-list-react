import React from 'react';
import './Input.css'

export const Input = ({value, type, onChange, placeholder, fullWidth, onEnterPressed, inputProps}) => {
  const handleChange = (event) => {
    if(onChange) onChange(event.target.value);
  }

  return (
    <div className={`input-container ${fullWidth ? 'full-width' : ''}`}>
      <input
        className='input-text'
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={(event) => (
          event.key === 'Enter' && onEnterPressed && onEnterPressed()
        )}
        {...inputProps}
      />
    </div>  
  )
}