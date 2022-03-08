import React from 'react';
import { Task } from './components/Task/Task';
import { AddTask } from './components/AddTask/AddTask';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';
import { Text } from '../../components/Text/Text';
import { Input } from '../../components/Form/Input';
import { useSelector, useDispatch } from 'react-redux';
import { closeModalAddTask, openModalAddTask, addTask, setSearchText } from '../../redux/slices/todoSlice';

export const ToDoList = () => {
    const dispatch = useDispatch()
    const [
        isModalAddTaskOpen,
        todoData,
        filteredTodoData,
        searchText,
    ] = useSelector(s => [
        s.todo.isModalAddTaskOpen,
        s.todo.todoData,
        s.todo.todoData.filter(task => task.name.includes(s.todo.searchText)),
        s.todo.searchText
    ])

    const tasks = React.useMemo(() => 
        filteredTodoData.filter(task => !task.completed)
    , [filteredTodoData])

    const tasksCompleted = React.useMemo(() => 
        filteredTodoData.filter(task => task.completed)
    , [filteredTodoData])

    const renderTasks = (task) => <Task task={task} key={task.id} />

    return (<>
        <Input value={searchText} onChange={text => dispatch(setSearchText(text)) } placeholder={'Buscar'}/>
        
        <Text gray text={`Total Tareas: ${todoData.length} - Por hacer: ${tasks.length}  - Completadas: ${tasksCompleted.length}`} />
        {tasks.length > 0 
            ? tasks.map(renderTasks)
            : <Text text="No tiene tareas" gray/>
        }
        {tasksCompleted.length > 0 
            ? tasksCompleted.map(renderTasks)
            : <Text text="No tiene tareas completadas" gray/>
        }

        <div style={{marginTop: 16}}>
            <Button
                value="+ Agregar Tarea"
                onClick={() => dispatch(openModalAddTask())}
            />
        </div>

        <Modal
            isOpen={isModalAddTaskOpen}
            onClose={() => dispatch(closeModalAddTask())}
        >
            <AddTask
                onAddTask={(data) => dispatch(addTask(data))}
                onCancel={() => dispatch(closeModalAddTask())}
            />
        </Modal>
    </>)
}