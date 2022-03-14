import React from 'react';
import './Input.css'
import { Alert } from '../Alert';

export const Input = ({
  value,
  type,
  onChange,
  placeholder,
  fullWidth,
  onEnterPressed,
  error,
  inputProps
}) => {
  const handleChange = (event) => {
    if(onChange) onChange(event.target.value);
  }

  return (
    <div className={`input-container ${fullWidth ? 'full-width' : ''}`}>
      <input
        className={`input-text ${error ? 'error' : ''}`}
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={(event) => (
          event.key === 'Enter' && onEnterPressed && onEnterPressed()
        )}
        {...inputProps}
      />
      {error && <Alert type="error">{error.join(', ')}</Alert>}
    </div>  
  )
}