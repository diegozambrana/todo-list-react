import React from 'react';
import { Task } from './components/Task/Task';
import { AddTask } from './components/AddTask/AddTask';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';
import { Text } from '../../components/Text/Text';
import { Input } from '../../components/Form/Input';
import { AppContext } from '../../context/TodoContext';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement }from '../../redux/slices/todo'
import { closeModalAddTask, openModalAddTask, addTask } from '../../redux/slices/todo';

export const ToDoList = () => {
    const {
        todoData,
        // tasks,
        // tasksCompleted,
        // addTask,
        searchText,
        setSearchText,
        // isModalAddTaskOpen,
        // setIsModalAddTaskOpen
    } = React.useContext(AppContext)

    const {counter, isModalAddTaskOpen, tasks, tasksCompleted} = useSelector(s => s.todo)
    const dispatch = useDispatch()

    const renderTasks = (task) => <Task task={task} key={task.id} />

    return (<>
        <p>counter: {counter}</p>
        <div> 
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
        <Input value={searchText} onChange={text => setSearchText(text) } placeholder={'Buscar'}/>
        
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