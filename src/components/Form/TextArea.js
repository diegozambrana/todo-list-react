import React from 'react';
import './TextArea.css'

export const TextArea = ({value, onChange, placeholder, fullWidth}) => {
  const handleChange = (event) => {
    if(onChange) onChange(event.target.value);
  }


  return (
    <div className={`textarea-container ${fullWidth ? 'full-width' : ''}`}>
      <textarea
        rows={5}
        className='textarea-text'
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>  
  )
}