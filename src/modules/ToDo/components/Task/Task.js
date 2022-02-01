import React from 'react';
import './Task.css';
import { Arrow } from '../../../../components/icons/arrows';
import { TextBlock } from '../../../../components/TextBlock/TextBlock';
import { Text } from '../../../../components/Text/Text';
import { Input } from '../../../../components/Form/Input';
import { Button } from '../../../../components/Button/Button';
import { Step } from '../Step/Step';

const Task = ({task, onRemoveTask, onAddStep}) => {
  const [showSteps, setShowSteps] = React.useState(false);
  const [newStep, setNewStep] = React.useState('');

  const handleCheckTask = (e) => {
    console.log(`handleCheckTask`, e.target.value)
  }

  const addStep = () => {
    const data = {
      id: `${task.id}s${task.steps.length + 1}`,
      name: newStep,
      completed: false
    }
    onAddStep(task.id, data);
    setNewStep('')
  }

  const onRemove = () => {
    if(onRemoveTask) onRemoveTask(task.id)
  }

  return (
    <div className="task">
      <div className="task-container">
        <div style={{marginRight: 16}}>
          <Arrow
            direction={showSteps ? 'up' : 'down'}
            pointer
            onClickArrow={() => {
              setShowSteps((show) => setShowSteps(!show));
            }}
          />
        </div>
        <p className="task-text">{task.name}</p>
        <div className="task-check">
          <input type="checkbox" checked={task.completed} onChange={handleCheckTask}/>
        </div> 
      </div>
      { showSteps &&
        <div className="step-wrapper">
          { task.steps.length
            ? task.steps.map((step) => <Step step={step} key={step.id}/>)
            : <Text text={'No existen pasos'} gray center/>
          }
          <div style={{position: 'relative'}}>
            <Input
              placeholder="Agregar nuevo paso"
              value={newStep}
              onChange={(value) => setNewStep(value)}
            />
            <div className='check-mark' onClick={addStep}>&#9745;</div>
          </div>
          <div className='description-block'>
            <Text text={'Descripción:'} type={`sub-sub-title`}/>
            <TextBlock text={task.description}/>
          </div>
          <Button onClick={onRemove} danger value={'Eliminar Tarea'} />
        </div>
      }
      
    </div>
  )
};

export { Task };