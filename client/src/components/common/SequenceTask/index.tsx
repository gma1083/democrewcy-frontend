import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';
import Task from '../Task';

const { Step } = Steps;

export interface SequenceTaskProps {
  tasks: any
}
 
const SequenceTask: React.SFC<SequenceTaskProps> = (props) => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  }

  return (  
    // TODO: leftButtonAction rightButtonAction doneAction cancelAction
    <Task title='Sequence Task' type='create' onSubmit={() => next()}>
        <div style={{paddingLeft: '10px', paddingRight: '10px'}}>
          <Steps direction='horizontal' current={current}>
            {props.tasks.map((task: any) => (
              <Step key={task.name} title={task.name} />
            ))}
          </Steps>
        </div>
        <div className="steps-content">{props.tasks[current].component}</div>
        <div className="steps-action">
          {current < props.tasks.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === props.tasks.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </Task>
  );
}

export default SequenceTask;