import React, { useEffect } from 'react';
import './Task.css';
import { Arrow } from '../../../../components/icons';
import { TextBlock } from '../../../../components/TextBlock';
import { Text } from '../../../../components/Text';
import { Input } from '../../../../components/Form/Input';
import { Step } from '../Step';

const Task = ({task, onCheckTask}) => {
  const [showSteps, setShowSteps] = React.useState(false);

  const handleCheckTask = (e) => {
    onCheckTask(task.id)
  }

/*   useEffect(() => {
    console.log(`[${task.id}] useffect: cada se ejecuta`)
  }) */

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
      <div className="task-container">
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
            ? task.steps.map((step) => <Step step={step} key={step.id}/>)
            : <Text text={'No existen pasos'} gray center/>
          }
          <Input placeholder="Agregar nuevo paso"/>
          <div className='description-block'>
            <Text text={'Descripción:'} type={`sub-sub-title`}/>
            <TextBlock text={task.description}/>
          </div>
        </div>
      }
      
    </div>
  )
};

export { Task };