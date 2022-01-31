import React from 'react';
import { INITIAL_DATA } from '../../data';
import { Task } from './components/Task/Task';

export const ToDoList = () => {
    const [todoData, setTodoData] = React.useState(INITIAL_DATA);

    const onCheckTask = (id) => {console.log(`onCheckTask`)}
    const onCheckStep = (idTask, idStep) => {console.log(`compleonCheckStepteTask`)}

    const addNewTask = (idTask) => {
        setTodoData();
    }

    const removeTask = (idTask) => {
        const newTodoData = todoData.filter((task => task.id !== idTask))
        setTodoData(newTodoData);
    }

    const editTask = (id, task) => {
        setTodoData();
    }

    return (<>
        {todoData.map((task) => <Task task={task} key={task.id} onRemoveTask={(id) => removeTask(id)}/>)}
    </>)
}