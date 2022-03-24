import React, { useState } from 'react';
import { Text } from '../Text';
import './task.css';

export const Task = ({task}) => {
    const [showDetail, setShowDetail] = useState(false)
    const icon = 'v';
    return<> <div className='task'>
        <span className='task-icon' onClick={() => {setShowDetail(!showDetail)}}>{icon}</span>
        <Text className='task-text'>{task.title}</Text>
        <input type="checkbox" checked={task.completed} onChange={() => console.log(`onChange`)}/>
    </div>
    {showDetail && <>
        lista de tareas
    </>}
    </>
}