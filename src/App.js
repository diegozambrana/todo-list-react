import React from 'react';
import './App.css';
import { ToDoList } from './modules/ToDo';
import { Login } from './modules/Auth/Login';
import { Register } from './modules/Auth/Register';
import { Text } from './components/Text/Text';

function App() {
  return (
    <div className="App container">
      <div>
        <Text text={'To Do List Project'} type="title"/>
      </div>
      <div>
        <Register />
        {/* <Login /> */}
        {/* <ToDoList /> */}
      </div>
    </div>
  );
}

export default App;
