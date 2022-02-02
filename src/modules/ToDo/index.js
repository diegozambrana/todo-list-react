import React from 'react';
import { INITIAL_DATA } from '../../data';
import { Task } from './components/Task/Task';
import { AddTask } from './components/AddTask/AddTask';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';
import { Text } from '../../components/Text/Text';

export const ToDoList = () => {
    const [todoData, setTodoData] = React.useState(INITIAL_DATA);
    const [isModalAddTaskOpen, setIsModalAddTaskOpen] = React.useState(false)

    const onCheckTask = (idTask) => {
        const newTodoData = todoData.map(task => task.id === idTask
            ? {... task, completed: !task.completed}
            : task
        )
        setTodoData(newTodoData);
    }
    const onCheckStep = (idTask, idStep) => {
        const newTodoData = todoData.map(task => task.id === idTask ? {
                ... task,
                steps: task.steps.map((step) => step.id === idStep
                    ? {...step, completed: !step.completed}
                    : step
                )
            } : task
        )
        setTodoData(newTodoData);
    }

    const addTask = (task) => {
        setTodoData([...todoData, task]);
        setIsModalAddTaskOpen(false);
    }

    const removeTask = (idTask) => {
        const newTodoData = todoData.filter((task => task.id !== idTask))
        setTodoData(newTodoData);
    }

    const editTask = (id, task) => {
        setTodoData();
    }

    const onAddStep = (idTask, newStep) => {
        const newTodoData = todoData.map(task => {
            if(task.id === idTask){
                task.steps.push(newStep)
                return task
            }
            return task
        })
        setTodoData(newTodoData);
    }

    return (<>
        {todoData.length > 0 
            ? todoData.map((task) => (
                <Task
                    task={task}
                    key={task.id}
                    onRemoveTask={(id) => removeTask(id)}
                    onAddStep={onAddStep}
                    onCheckTask={onCheckTask}
                    onCheckStep={onCheckStep}
                />
            ))
            : <Text text="No tiene tareas" gray/>
        }

        <div style={{marginTop: 16}}>
            <Button
                value="+ Agregar Tarea"
                onClick={() => setIsModalAddTaskOpen(true)}
            />
        </div>

        <Modal
            isOpen={isModalAddTaskOpen}
            onClose={() => setIsModalAddTaskOpen(false)}
        >
            <AddTask
                onAddTask={addTask}
                onCancel={() => setIsModalAddTaskOpen(false)}
            />
        </Modal>
    </>)
}