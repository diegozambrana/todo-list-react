import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todo'

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
})