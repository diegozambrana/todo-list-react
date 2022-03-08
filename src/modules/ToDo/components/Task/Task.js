import React from 'react';
import './Task.css';
import { useDispatch } from 'react-redux';
import { Arrow } from '../../../../components/icons/arrows';
import { TextBlock } from '../../../../components/TextBlock/TextBlock';
import { Text } from '../../../../components/Text/Text';
import { Input } from '../../../../components/Form/Input';
import { Button } from '../../../../components/Button/Button';
import { Step } from '../Step/Step';
import { uuid } from '../../../../utils';
import { EditText } from '../../../../components/EditText';
import { removeTask, onAddStep, editTask} from '../../../../redux/slices/todoSlice';

const Task = ({task, }) => {
  const dispatch = useDispatch();
  const [showSteps, setShowSteps] = React.useState(false);
  const [newStep, setNewStep] = React.useState('');

  const completedNumberSteps = React.useMemo(() => {
    return task.steps.filter(step => step.completed).length || 0;
  }, [task])

  const handleCheckTask = () => {
    dispatch(editTask({idTask: task.id, field: 'completed', value: !task.completed}))
  }

  const addStep = () => {
    if(newStep.length < 3) return
    const data = {
      id: uuid(),
      name: newStep,
      completed: false
    }
    dispatch(onAddStep({idTask: task.id, newStep: data}));
    setNewStep('')
  }

  const onRemove = () => {
    dispatch(removeTask(task.id))
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

        <EditText
          value={task.name}
          className={'task-text'}
          onComplete={(text) => dispatch(editTask({idTask: task.id, field:'name', value: text}))}
        />
        <div className='completed-text'>{completedNumberSteps} / {task.steps.length}</div>
        <div className="task-check">
          <input type="checkbox" checked={task.completed} onChange={handleCheckTask}/>
        </div> 
      </div>
      { showSteps &&
        <div className="step-wrapper">
          { task.steps.length
            ? task.steps.map((step) => (
              <Step
                step={step}
                key={step.id}
                idTask={task.id}
              />
            ))
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