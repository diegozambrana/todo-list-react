import React from 'react';
import './Step.css'

export const Step = ({step, onStepChecked}) => {

    const handleInputChange = (e) => {
        console.log(`handleInputChange`, e.target.checked)
        if(onStepChecked) onStepChecked()
    }

    return (
        <div className='step'>
            <p className='step-text'>{step.name}</p>
            <div className="step-check">
                <input type="checkbox" onChange={handleInputChange} checked={step.completed}/>
            </div> 
        </div>
    )
}