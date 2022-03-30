import React, { useContext } from 'react';
import { Task } from './components/Task';
import { Text } from '../../components/Text';
import { AddTask } from './components/AddTask';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { TodoContext } from '../../context/TodoContext';

export const ToDoList = () => {
    const {
        todoData,
        isModalAddTaskOpen,
        setIsModalAddTaskOpen,
        addTask,
    } = useContext(TodoContext);

    return (<>
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