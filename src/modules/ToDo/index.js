import React from 'react';
import { Task } from './components/Task/Task';
import { AddTask } from './components/AddTask/AddTask';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';
import { Text } from '../../components/Text/Text';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Input } from '../../components/Form/Input';

export const ToDoList = () => {
    const {item: todoData, saveItem: setTodoData} = useLocalStorage('TODO', []);
    const [isModalAddTaskOpen, setIsModalAddTaskOpen] = React.useState(false);
    const [searchText, setSearchText] = React.useState('');
    const filteredTodoData = React.useMemo(() => {
        if(searchText){
            return todoData.filter(task => task.name.includes(searchText));
        }
        return todoData;
    }, [searchText, todoData])

    const tasks = React.useMemo(() => filteredTodoData.length > 0
        ? filteredTodoData.filter(task => !task.completed)
        : []
    , [filteredTodoData])

    const tasksCompleted = React.useMemo(() => filteredTodoData.length > 0
        ? filteredTodoData.filter(task => task.completed)
        : []
    , [filteredTodoData])

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
        <Input value={searchText} onChange={text => setSearchText(text) } placeholder={'Buscar'}/>
        
        <Text gray text={`Total Tareas: ${ToDoList.length} - Por hacer: ${tasks.length}  - Completadas: ${tasksCompleted.length}`} />
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