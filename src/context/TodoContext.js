import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AppContext = React.createContext();


export const TodoContext = (props) => {
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

    const addTask = (task) => {
        setTodoData([...todoData, task]);
        setIsModalAddTaskOpen(false);
    }

    const removeTask = (idTask) => {
        const newTodoData = todoData.filter((task => task.id !== idTask))
        setTodoData(newTodoData);
    }

    const removeStep = (idTask, idStep) => {
        const newTodoData = todoData.map(( task => task.id === idTask
            ? {
                ...task,
                steps: task.steps.filter(step => step.id !== idStep)
            }
            : task))
        setTodoData(newTodoData);
    }

    const editTask = (idTask, field, value) => {
        const newTodoData = todoData.map(task => task.id === idTask
            ? {... task, [field]: value}
            : task
        )
        setTodoData(newTodoData);
    }

    const editStep = (idTask, idStep, field, value) => {
        const newTodoData = todoData.map(task => task.id === idTask ? {
                ... task,
                steps: task.steps.map((step) => step.id === idStep
                    ? {...step, [field]: value}
                    : step
                )
            } : task
        )
        setTodoData(newTodoData);
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
    return <AppContext.Provider value={{
        tasks,
        tasksCompleted,
        todoData,
        addTask,
        removeTask,
        editTask,
        editStep,
        onAddStep,
        searchText,
        setSearchText,
        isModalAddTaskOpen,
        setIsModalAddTaskOpen,
        removeStep
    }}>{props.children}</AppContext.Provider>
}