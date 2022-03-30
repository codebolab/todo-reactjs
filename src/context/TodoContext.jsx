import React from 'react';
import { useLocalStorage } from '../hook/useLocalStorage';

export const TodoContext = React.createContext();

export const TodoContextProvider = ({children}) => {
    const { item: todoData, saveItem: setTodoData} = useLocalStorage('TODO', [])
    const [ isModalAddTaskOpen, setIsModalAddTaskOpen ] = React.useState(false)

    const addTask = (task) => {
        setTodoData([...todoData, task]);
        setIsModalAddTaskOpen(false);
    }

    const removeTask = (idTask) => {
        const newTodoData = todoData.filter((task => task.id !== idTask))
        setTodoData(newTodoData);
    }

    const onCheckTask = (idTask) => {
        const newTodoData = todoData.map(task => task.id === idTask
            ? {... task, completed: !task.completed}
            : task
        )
        setTodoData(newTodoData);
    }

    const onCheckStep = (idTask, idStep) => {
        const newTodoData = todoData.map(task => task.id === idTask ? {
                ... task,
                steps: task.steps.map((step) => step.id === idStep
                    ? {...step, completed: !step.completed}
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

    return <TodoContext.Provider value={{
        todoData,
        isModalAddTaskOpen,
        setIsModalAddTaskOpen,
        addTask,
        removeTask,
        onCheckTask,
        onCheckStep,
        onAddStep
    }}>{children}</TodoContext.Provider>
}