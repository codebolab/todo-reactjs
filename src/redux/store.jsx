import { configureStore } from '@reduxjs/toolkit'
import todoSlice  from './features/todoSlice'
import counterSlice  from './features/counterSlice'

export default configureStore({
 reducer: {
    todo: todoSlice,
    counter: counterSlice
 },
})