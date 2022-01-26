import React from 'react';
import './task.css';
import {Arrow} from '../icons/arrows';
import {Step} from './components/Step';

const Task = ({item}) => {
  const [showSteps, setShowSteps] = React.useState(false);

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
        <p className="task-text">{item.name}</p>
        <div className="task-check">
          <input type="checkbox" checked={item.completed}/>
        </div> 
      </div>
      { showSteps &&
        <div className="step-wrapper">
          {item.steps.map((step) => <Step step={step}/>)}
        </div>
      }
    </div>
  )
};

export { Task };