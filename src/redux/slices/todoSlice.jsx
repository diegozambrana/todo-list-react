import { createSlice } from '@reduxjs/toolkit'
import { getDataFromLocalStorage, saveItem } from '../../utils'

const todoData = getDataFromLocalStorage('TODO', []);

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoData,
    searchText: "",
    isModalAddTaskOpen: false,
  },
  reducers: {
    openModalAddTask: (state) => {
      state.isModalAddTaskOpen = true;
    },
    closeModalAddTask: (state) => {
      state.isModalAddTaskOpen = false;
    },
    addTask: (state, action) => {
      state.todoData = [...state.todoData, action.payload];
      state.isModalAddTaskOpen = false;
      saveItem('TODO', state.todoData)
    },

    removeTask: (state, action) => {
      state.todoData = todoData.filter((task => task.id !== action.payload));
      saveItem('TODO', state.todoData)
    },
    removeStep: (state, action) => {
      const {idTask, idStep} = action.payload;
      state.todoData = state.todoData.map(( task => task.id === idTask
        ? {
            ...task,
            steps: task.steps.filter(step => step.id !== idStep)
        }
        : task))
      saveItem('TODO', state.todoData)
    },
    editTask: (state, action) => {
      const {idTask, field, value} = action.payload;
      state.todoData = state.todoData.map(task => task.id === idTask
        ? {... task, [field]: value}
        : task
      )
      saveItem('TODO', state.todoData)
    },
    editStep: (state, action) => {
      const {idTask, idStep, field, value} = action.payload;
      state.todoData = state.todoData.map(task => task.id === idTask ? {
          ... task,
          steps: task.steps.map((step) => step.id === idStep
            ? {...step, [field]: value}
            : step
          )
        } : task
      )
      saveItem('TODO', state.todoData)
    },
    onAddStep: (state, action) => {
      const {idTask, newStep} = action.payload;
      state.todoData = state.todoData.map(task => {
        if(task.id === idTask){
          task.steps.push(newStep)
          return task
        }
        return task
      })
      saveItem('TODO', state.todoData)
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload
    }
  },
})

export const {
  addTask,
  openModalAddTask,
  closeModalAddTask,
  removeStep,
  removeTask,
  editTask,
  editStep,
  onAddStep,
  setSearchText,
} = todoSlice.actions
export default todoSlice.reducer