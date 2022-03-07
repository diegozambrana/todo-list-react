import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
      counter: 0,
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
    },
  })

export const { increment, decrement, incrementByAmount } = todoSlice.actions
export default todoSlice.reducer