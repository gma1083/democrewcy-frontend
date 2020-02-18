import React, { useState } from 'react';
import { Steps, message } from 'antd';
import Task from '../Task';

const { Step } = Steps;

export interface SequenceTaskProps {
  tasks: any
}
 

const submitAlert = () => message.success('Processing complete!');
const cancelAlert = (data: any) => alert('cancel');

const SequenceTask: React.SFC<SequenceTaskProps> = (props) => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    if (current < props.tasks.length - 1) {
      setCurrent(current + 1);
    }
  };
  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  }

  return (  
    // TODO: leftButtonAction rightButtonAction doneAction cancelAction
    <Task 
      title='Sequence Task' 
      submitAction={submitAlert} 
      continueAction={() => next()}
      goBackAction={() => prev()}
      cancelAction={cancelAlert}
      type='create' 
      disallowActions={false}
    >

      <div style={{paddingLeft: '10px', paddingRight: '10px'}}>
        <Steps direction='horizontal' current={current}>
          {props.tasks.map((task: any) => (
            <Step key={task.name} title={task.name} />
          ))}
        </Steps>
      </div>

      <div className="steps-content">
        {props.tasks[current].component}
      </div>

    </Task>
  );
}

export default SequenceTask;