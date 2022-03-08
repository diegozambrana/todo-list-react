import React from 'react';
import './EditText.css';

export const EditText = ({value, className, onComplete}) => {
  const [editMode, setEditMode] = React.useState(false);
  const [editText, setEditText] = React.useState(value);
  
  const onAccept = () => {
    onComplete(editText);
    setEditMode(false);
  }

  const onCancel = () => {
    setEditText(value);
    setEditMode(false);
  }

  const onKeyDown = (e) => {
    if(e.key === "Enter") onAccept();
    else if(e.key === "Escape") onCancel();
  }

  return (
    <div className={`edit-text-wrapper ${className}`}>
      {!editMode && (
        <p
          className="edit-text"
          onClick={() => setEditMode(!editMode)}
        >{value}</p>
      )}
      {editMode && (
        <div className="edit-text-input-wrapper">
          <input
            className="edit-text-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus={editMode}
            onBlur={onCancel}
            onKeyDown={onKeyDown}
          />
          <div className="edit-text-actions">
            <div className="edit-text-actions-accept edit-text-action" onClick={onAccept}>&#9745;</div>
            <div className="edit-text-actions-cancel edit-text-action" onClick={onCancel}>x</div>
          </div>
        </div>
      )}
    </div>
  );
}