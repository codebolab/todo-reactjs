import React, { useContext, useEffect } from 'react';
import './Task.css';
import { Arrow } from '../../../../components/icons';
import { TextBlock } from '../../../../components/TextBlock';
import { Text } from '../../../../components/Text';
import { Input } from '../../../../components/Form/Input';
import { Step } from '../Step';
import { Button } from '../../../../components/Button';
import { uuid } from '../../../../utils/index';
import { TodoContext } from '../../../../context/TodoContext';

const Task = ({task, /* onCheckTask */ /* onCheckStep */}) => {
  const {
    removeTask,
    onCheckTask,
    onAddStep
  } = useContext(TodoContext);
  const [showSteps, setShowSteps] = React.useState(false);
  const [newStep, setNewStep] = React.useState('');

  const handleCheckTask = () => {
    onCheckTask(task.id);
  }


  const addStep = () => {
    if(newStep.length < 3) return
    const data = {
      id: uuid(),
      name: newStep,
      completed: false
    }
    onAddStep(task.id, data);
    setNewStep('')
  }

  const onRemove = () => {
    removeTask(task.id)
  }

  useEffect(() => {
    console.log(`[${task.id}] useffect: al montar`)
    return () => {
      console.log(`[${task.id}] useffect: al desmontar`)
    }
  }, [])

  useEffect(() => {
    console.log(`[${task.id}] useffect: cada se se actualizar ${task}`)
  }, [task])

  return (
    <div className="task">
      <div className={`task-container ${task.completed && 'completed'}`}>
        <div style={{marginRight: 16}}>
          <Arrow
            direction={showSteps ? 'up' : 'down'}
            pointer
            onClickArrow={() => {
              setShowSteps((show) => setShowSteps(!show));
            }}
          />
        </div>
        <p className="task-text">{task.name}</p>
        <div className="task-check">
          <input type="checkbox" checked={task.completed} onChange={handleCheckTask}/>
        </div> 
      </div>
      { showSteps &&
        <div className="step-wrapper">
          { task.steps.length
            ? task.steps.map((step) => <Step idTask={task.id} step={step} key={step.id} />)
            : <Text text={'No existen pasos'} gray center/>
          }
          <div style={{position: 'relative'}}>
            <Input
              placeholder="Agregar nuevo paso"
              value={newStep}
              onChange={(value) => setNewStep(value)}
              onEnterPressed={addStep}
            />
            <div className='check-mark' onClick={addStep}>&#9745;</div>
          </div>
          <div className='description-block'>
            <Text text={'Descripción:'} type={`sub-sub-title`}/>
            <TextBlock text={task.description}/>
          </div>
          <Button onClick={onRemove} danger value={'Eliminar Tarea'} />
        </div>
      }
      
    </div>
  )
};

export { Task };