import React, { useContext } from 'react';
import { TodoContext } from '../../../../context/TodoContext';
import './Step.css'

export const Step = ({step, idTask}) => {
    const {onCheckStep} = useContext(TodoContext);

    const {test} = useContext(TodoContext);
    const handleInputChange = () => {
        onCheckStep(idTask, step.id)
    }

    return (
        <div className='step'>
            <p className={`step-text ${step.completed ? 'complete' : ''}`}>{step.name}{test}</p>
            <div className="step-check">
                <input type="checkbox" onChange={handleInputChange} checked={step.completed}/>
            </div> 
        </div>
    )
}