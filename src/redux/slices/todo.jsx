import { createSlice } from '@reduxjs/toolkit'
import { getDataFromLocalStorage } from '../../utils'
/* import { useLocalStorage } from '../../hooks/useLocalStorage'

const {item: todoData, saveItem: setTodoData} = useLocalStorage('TODO', []); */
const todoData = getDataFromLocalStorage('TODO', []);
export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
      counter: 0,
      todoData,
      tasks: todoData.filter(task => !task.completed),
      tasksCompleted: todoData.filter(task => task.completed),
      isModalAddTaskOpen: false,
    },
    reducers: {
      increment: (state) => {
        state.counter += 1
      },
      decrement: (state) => {
        state.counter -= 1
      },
      incrementByAmount: (state, action) => {
        state.counter += action.payload
      },

      // TODO actions
      openModalAddTask: (state) => {
        state.isModalAddTaskOpen = true;
      },
      closeModalAddTask: (state) => {
        state.isModalAddTaskOpen = false;
      },
      addTask: (state, action) => {
        const newTask = action.payload
        state.todoData = [...state.todoData, newTask]
        state.tasks = state.todoData.filter(task => !task.completed);
        state.tasksCompleted = state.todoData.filter(task => task.completed);
        state.isModalAddTaskOpen = false;
      },
    },
  })

export const { increment, decrement, incrementByAmount,
  addTask,
  openModalAddTask,
  closeModalAddTask,
} = todoSlice.actions
export default todoSlice.reducer