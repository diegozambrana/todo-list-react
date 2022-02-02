import React from 'react';
import './Step.css'

export const Step = ({step, onStepChecked}) => {

    const handleInputChange = (e) => {
        if(onStepChecked) onStepChecked(step.id);
    }

    return (
        <div className='step'>
            <p className={`step-text ${step.completed ? 'complete' : ''}`}>{step.name}</p>
            <div className="step-check">
                <input type="checkbox" onChange={handleInputChange} checked={step.completed}/>
            </div> 
        </div>
    )
}