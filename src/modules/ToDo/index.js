import React, { useEffect } from 'react';
import { INITIAL_DATA } from '../../data';
import { Task } from './components/Task/Task';
import { AddTask } from './components/AddTask/AddTask';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';
import { Text } from '../../components/Text/Text';

export const ToDoList = () => {
    const [todoData, setTodoData] = React.useState(INITIAL_DATA);
    const [isModalAddTaskOpen, setIsModalAddTaskOpen] = React.useState(false)
    /* const [tasks, setTasks] = React.useState([]);
    const [tasksCompleted, setTasksCompleted] = React.useState([])

    useEffect(() => {
        console.log(`----> tasks`, todoData, );
        setTasks(todoData.filter(task => !task.completed))
        setTasksCompleted(todoData.filter(task => task.completed))
    }, [todoData]) */

    const tasks = React.useMemo(() => todoData.length > 1
        ? todoData.filter(task => !task.completed)
        : []
    , [todoData])

    const tasksCompleted = React.useMemo(() => todoData.length > 1
        ? todoData.filter(task => task.completed)
        : []
    , [todoData])

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
        {tasks.length > 0 
            ? tasks.map((task) => (
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
        {tasksCompleted.length > 0 
            ? tasksCompleted.map((task) => (
                <Task
                    task={task}
                    key={task.id}
                    onRemoveTask={(id) => removeTask(id)}
                    onAddStep={onAddStep}
                    onCheckTask={onCheckTask}
                    onCheckStep={onCheckStep}
                />
            ))
            : <Text text="No tiene tareas completadas" gray/>
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