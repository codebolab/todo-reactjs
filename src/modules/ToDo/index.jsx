import React, { /* useContext */ } from 'react';
import { Task } from './components/Task';
import { Text } from '../../components/Text';
import { AddTask } from './components/AddTask';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
// import { TodoContext } from '../../context/TodoContext';
import { ReduxComponent } from '../../components/test/ReduxComponent';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, setIsModalAddTaskOpen, removeTask, onCheckTask, onCheckStep, onAddStep } from '../../redux/features/todoSlice';
export const ToDoList = () => {
    /* const {
        todoData,
        isModalAddTaskOpen,
        setIsModalAddTaskOpen,
        addTask,
    } = useContext(TodoContext); */

    const {todoData, isModalAddTaskOpen} = useSelector(s => s.todo)
    const dispatch = useDispatch()

    return (<>
    <ReduxComponent />
        {todoData.length > 0 
            ? todoData.map((task) => (
                <Task
                    task={task}
                    key={task.id}
                />
            ))
            : <div className='todo-empty'>
                <Text center text="No tiene tareas" gray/>
            </div>
        }

        <div style={{marginTop: 16}}>
            <Button
                value="+ Agregar Tarea"
                onClick={() => dispatch(setIsModalAddTaskOpen(true))}
            />
        </div>

        <Modal
            isOpen={isModalAddTaskOpen}
            onClose={() => dispatch(setIsModalAddTaskOpen(false))}
        >
            <AddTask
                onAddTask={(task) => dispatch(addTask(task))}
                onCancel={() => dispatch(setIsModalAddTaskOpen(false))}
            />
        </Modal>
    </>)
} 