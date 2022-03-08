import React from 'react';
import './Step.css'
import { useDispatch } from 'react-redux';
import { EditText } from '../../../../components/EditText';
import { editStep, removeStep } from '../../../../redux/slices/todoSlice';


export const Step = React.memo(({step, idTask}) => {
    const dispatch = useDispatch();

    const onUpdateStep = (name, value) => {
        dispatch(editStep({idTask, idStep: step.id, field: name, value}));
    }

    const onRemoveStep = () => dispatch(removeStep({idTask, idStep: step.id}))

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