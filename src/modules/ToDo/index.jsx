import React, { useEffect } from 'react';
import { INITIAL_DATA } from '../../data';
import { Task } from './components/Task';
import { Text } from '../../components/Text';

export const ToDoList = () => {
    const [ todoData, setTodoData ] = React.useState(INITIAL_DATA);

    // const [ counter, setCounter ] = React.useState(todoData.length);

    const counter = React.useMemo(() => {
        return todoData.length
    }, [todoData])

    const addTask = (task) => {
        setTodoData([...todoData, task]);
    }

    const onRemoveTask = () => {
        const newTodoData = [...todoData]
        newTodoData.splice(-1)
        setTodoData(newTodoData)
    }

    const onCheckTask = (id) => {
        const newTodoData = todoData.map(task => {
            if(task.id == id){
                return {...task, completed: !task.completed}
            }
            return task
        })
        setTodoData(newTodoData)
    }
    const onCheckStep = (idTask, idStep) => {console.log(`compleonCheckStepteTask`)}
    

    return (<>
        <div style={{backgroundColor: 'white'}}><Text text={`Tareas Totales: ${counter}`} gray /></div>
        
        <button onClick={() => {
            addTask({
                id: 't10',
                name: 'Tarea 1',
                completed: true,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales tincidunt lobortis.',
                steps: []

            })
        }}>Agregar Tarea </button>
        <button onClick={onRemoveTask}>Eliminar ultimo</button>
        {todoData.map((task) => <Task task={task} key={task.id} onCheckTask={onCheckTask}/>)}
    </>)
} 