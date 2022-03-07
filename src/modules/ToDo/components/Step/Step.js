import React from 'react';
import './Step.css'
import { AppContext } from '../../../../context/TodoContext';
import { EditText } from '../../../../components/EditText';


export const Step = React.memo(({step, taskId}) => {
    const { editStep, removeStep } = React.useContext(AppContext);

    const onUpdateStep = (name, value) => {
        editStep(taskId, step.id, name, value);
    }

    const onRemoveStep = () => removeStep(taskId, step.id)

    return (
        <div className='step'>
            <EditText
              value={step.name} 
              onComplete={(value) => onUpdateStep('name', value)} 
              className={`step-text ${step.completed ? 'complete' : ''}`}
            />
            <div className="step-check">
                <input
                    type="checkbox"
                    onChange={() => onUpdateStep('completed', !step.completed)}
                    checked={step.completed}
                />
            </div>
            <div className="remove-step" onClick={onRemoveStep}>x</div>
        </div>
    )
})