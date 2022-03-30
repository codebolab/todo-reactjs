import React, { useEffect, useMemo, useRef } from 'react';
import { INITIAL_DATA } from '../../data';
import { Task } from './components/Task';
import { Text } from '../../components/Text';
import { AddTask } from './components/AddTask';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { Input, InputRef } from '../../components/Form/Input';
import { UseReducerComponent } from '../../components/test/UseReducerComponent';

export const ToDoList = () => {
    const [ todoData, setTodoData ] = React.useState(INITIAL_DATA);
    // const todoFilteredData = useMemo(() => {}, [todoData])
    const [ todoFilteredData, setTodoFilteredData ] = React.useState([]);
    const [ isModalAddTaskOpen, setIsModalAddTaskOpen ] = React.useState(false)
    const searchRef = useRef()
    const contador = useRef(0)

    useEffect(() => {setTodoFilteredData(todoData)}, [todoData])


    const addTask = (task) => {
        setTodoData([...todoData, task]);
        setIsModalAddTaskOpen(false);
        contador.current += 1;
    }

    const removeTask = (idTask) => {
        const newTodoData = todoData.filter((task => task.id !== idTask))
        setTodoData(newTodoData);
        contador.current += 1;
    }

    const onCheckTask = (idTask) => {
        const newTodoData = todoData.map(task => task.id === idTask
            ? {... task, completed: !task.completed}
            : task
        )
        setTodoData(newTodoData);
        contador.current += 1;
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
        contador.current += 1;
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

    const search = () => {
        console.log(searchRef.current, contador.current )
        setTodoFilteredData(todoData.filter(task => task.name.includes(searchRef.current.value)))
    }
    

    return (<>
        <UseReducerComponent />
        <InputRef inputProps={{ref: searchRef}} placeholder={'buscador'} />
        <Button value="Buscar" onClick={search} />
        <Button value="enfocar" onClick={() => searchRef.current.focus()} />
        {todoFilteredData.length > 0 
            ? todoFilteredData.map((task) => (
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