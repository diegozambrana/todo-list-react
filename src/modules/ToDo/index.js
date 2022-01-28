import React from 'react';
import { INITIAL_DATA } from '../../data';
import { Task } from './components/Task/Task';

export const ToDoList = () => {
    const [todoData, setTodoData] = React.useState(INITIAL_DATA);

    const onCheckTask = (id) => {console.log(`onCheckTask`)}
    const onCheckStep = (idTask, idStep) => {console.log(`compleonCheckStepteTask`)}

    return (<>
        {todoData.map((task) => <Task task={task} key={task.id}/>)}
    </>)
}