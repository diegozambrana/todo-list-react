import React from 'react';
import { Task } from './components/Task/Task';
import { AddTask } from './components/AddTask/AddTask';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';
import { Text } from '../../components/Text/Text';
import { Input } from '../../components/Form/Input';
import { AppContext } from '../../context/TodoContext';

export const ToDoList = () => {
    const {
        todoData,
        tasks,
        tasksCompleted,
        addTask,
        searchText,
        setSearchText,
        isModalAddTaskOpen,
        setIsModalAddTaskOpen
    } = React.useContext(AppContext)

    const renderTasks = (task) => <Task task={task} key={task.id} />

    return (<>
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