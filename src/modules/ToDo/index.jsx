import React, { useEffect } from 'react';
import { INITIAL_DATA } from '../../data';
import { Task } from './components/Task';
import { Text } from '../../components/Text';
import { AddTask } from './components/AddTask';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';

export const ToDoList = () => {
    const [ todoData, setTodoData ] = React.useState(INITIAL_DATA);
    const [ isModalAddTaskOpen, setIsModalAddTaskOpen ] = React.useState(false)


    const counter = React.useMemo(() => {
        return todoData.length
    }, [todoData])

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
    

    return (<>
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