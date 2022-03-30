import React, { useReducer } from 'react';
import { INITIAL_DATA } from '../../data';
import { Task } from './components/Task';
import { Text } from '../../components/Text';
import { AddTask } from './components/AddTask';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { TestHook } from '../../hook/testHook';

const ACTIONS = {
    ADD_TASK: 'ADD_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
    ON_CHECK_TASK: 'ON_CHECK_TASK',
    ON_CHECK_STEP: 'ON_CHECK_STEP',
    ADD_STEP: 'ADD_STEP'
}

function reducer(state, action) {
    console.log(`reducer`, state, action)
    switch (action.type) {
        case ACTIONS.ADD_TASK:
            return [...state, action.task];
        case ACTIONS.REMOVE_TASK:
            return state.filter((task => task.id !== action.idTask));
        case ACTIONS.ON_CHECK_TASK:
            return state.map(task => task.id === action.idTask
                ? {... task, completed: !task.completed}
                : task
            );
        case ACTIONS.ON_CHECK_STEP:
            return state.map(task => task.id === action.idTask ? {
                ... task,
                steps: task.steps.map((step) => step.id === action.idStep
                    ? {...step, completed: !step.completed}
                    : step
                )
            } : task
        );
        case ACTIONS.ADD_STEP:
            return state.map(task => {
                if(task.id === action.idTask){
                    task.steps.push(action.newStep)
                    return task
                }
                return task
            });
                                            
        default:
            throw new Error();
    }
}

export const TodoListReducer = () => {
    const [ todoData, dispatch ] = useReducer(reducer, INITIAL_DATA);
    const [ isModalAddTaskOpen, setIsModalAddTaskOpen ] = React.useState(false)
    const {count, increase, decrease} = TestHook(10)

    const addTask = (task) => {
        dispatch({type: ACTIONS.ADD_TASK, task})
        setIsModalAddTaskOpen(false);
    }

    const removeTask = (idTask) => {
        dispatch({type: ACTIONS.REMOVE_TASK, idTask})
    }

    const onCheckTask = (idTask) => {
        dispatch({type: ACTIONS.ON_CHECK_TASK, idTask})
    }

    const onCheckStep = (idTask, idStep) => {
        dispatch({type: ACTIONS.ON_CHECK_STEP, idTask, idStep})
    }

    const onAddStep = (idTask, newStep) => {
        dispatch({type: ACTIONS.ON_ADD_STEP, idTask, newStep})
    }

    return (<>
        <div style={{background: 'white'}}>
            <p>{count}</p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
        {todoData.length > 0 
            ? todoData.map((task) => (
                <Task
                    task={task}
                    key={task.id}
                    onRemoveTask={(id) => removeTask(id)}
                    onAddStep={onAddStep}
                    onCheckTask={onCheckTask}
                    onCheckStep={onCheckStep}
                />
            ))
            : <div className='todo-empty'>
                <Text center text="No tiene tareas" gray/>
            </div>
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

