import React, { useEffect } from 'react';
import './Task.css';
import { Arrow } from '../../../../components/icons/arrows';
import { TextBlock } from '../../../../components/TextBlock/TextBlock';
import { Text } from '../../../../components/Text/Text';
import { Input } from '../../../../components/Form/Input';
import { Button } from '../../../../components/Button/Button';
import { Step } from '../Step/Step';
import { uuid } from '../../../../utils';

const Task = ({task, onRemoveTask, onAddStep, onCheckTask, onCheckStep}) => {
  const [showSteps, setShowSteps] = React.useState(false);
  const [newStep, setNewStep] = React.useState('');

  const completedNumberSteps = React.useMemo(() => {
    return task.steps.filter(step => step.completed).length || 0;
  }, [task])

  useEffect(() => {
    console.log(`Tarea`, task.name, `ha sido montada`)
    // document.addEventListener('mousemove', (e) => {console.log(e.target.position)})
    return () => {
      console.log(`Tarea`, task.name, `ha sido desmontada`)
      //document.removeEventListener('mousemove', (e) => {console.log(e.target.position)})
    }
  }, []);

  const handleCheckTask = () => {
    onCheckTask(task.id);
  }

  const handleStepChecked = (idStep) => {
    onCheckStep(task.id, idStep) 
  }

  const addStep = () => {
    if(newStep.length < 3) return
    const data = {
      id: uuid(),
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
      <div className={`task-container ${task.completed && 'completed'}`}>
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
        <div className='completed-text'>{completedNumberSteps} / {task.steps.length}</div>
        <div className="task-check">
          <input type="checkbox" checked={task.completed} onChange={handleCheckTask}/>
        </div> 
      </div>
      { showSteps &&
        <div className="step-wrapper">
          { task.steps.length
            ? task.steps.map((step) => <Step step={step} key={step.id} onStepChecked={handleStepChecked}/>)
            : <Text text={'No existen pasos'} gray center/>
          }
          <div style={{position: 'relative'}}>
            <Input
              placeholder="Agregar nuevo paso"
              value={newStep}
              onChange={(value) => setNewStep(value)}
              onEnterPressed={addStep}
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