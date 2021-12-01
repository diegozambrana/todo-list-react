import React from 'react';
import './task.css';
import {Arrow} from '../icons/arrows';

const Task = ({item}) => (
  <div className="task">
    <div style={{marginRight: 16}}>
      <Arrow direction={'down'} pointer/>
    </div>
    <p className="task-text">{item.name}</p>
    <div className="task-check">
      <input type="checkbox" checked={item.completed}/>
    </div>
  </div>
);

export { Task };