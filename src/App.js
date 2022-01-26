import React from 'react';
import './App.css';
import { Task } from './components/Task/task';


const DATA = [
  {name: 'Tarea 11', completed: true, steps: []},
  {name: 'Tarea 22', completed: false, steps: [{name: 'step 1', completed: false}]},
  {name: 'Tarea 323', completed: false, steps: [{name: 'step 1', completed: false}, {name: 'step 2', completed: false}]}
]

function App() {
  return (
    <div className="App container">
      <div>
        Hola  esta es la primera APP, como esta?
        {DATA.map((task) => <Task item={task}/>)}
      </div>
    </div>
  );
}

export default App;
