import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorageData, setLocalStorageData } from '../../utils';

const initTodo = getLocalStorageData('TODO_REDUX', []);

export const todoSlice = createSlice({
 name: 'todo',
 initialState: {
   todoData: initTodo,
   isModalAddTaskOpen: false,
 },
 reducers: {
    addTask: (state, action) => {
        state.todoData = [...state.todoData, action.payload];
        state.isModalAddTaskOpen = false;
        console.log(`state.todoData`, state.todoData)
        setLocalStorageData('TODO_REDUX', state.todoData);
    },
    removeTask: (state) => {},
    onCheckTask: (state) => {},
    onCheckStep: (state) => {},
    onAddStep: (state) => {},
    setIsModalAddTaskOpen: (state, action) => {
        console.log(`setIsModalAddTaskOpen`, action)
        state.isModalAddTaskOpen = action.payload
    },
 },
})

export const { addTask, removeTask, onCheckTask, onCheckStep, onAddStep, setIsModalAddTaskOpen } = todoSlice.actions
export default todoSlice.reducer