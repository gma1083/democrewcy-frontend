import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';
import Task from '../../common/Task';
import SequenceTask from '../../common/SequenceTask';

const submit = (data: any) => alert('yo');

const tasks = [{
  name: 'Step 1',
  component: (
    <Task title='Step 1' onSubmit={submit} type='create' disallowActions={true}>

    </Task>
  )
}, {
  name: 'Step 2',
  component: (
    <Task title='Step 2' onSubmit={submit} type='create' disallowActions={true}>

    </Task>
  )
}, {
  name: 'Step 3',
  component: (
    <Task title='Step 3' onSubmit={submit} type='create' disallowActions={true}>

    </Task>
  )
}, {
  name: 'Step 4',
  component: (
    <Task title='Step 4' onSubmit={submit} type='create' disallowActions={true}>

    </Task>
  )
}, {
  name: 'Step 5',
  component: (
    <Task title='Step 5' onSubmit={submit} type='create' disallowActions={true}>

    </Task>
  )
}];
 
interface SequenceTaskExampleProps {
};

const SequenceTaskExample: React.SFC<SequenceTaskExampleProps> = () => {

  const submit = (data: any) => alert('yo');

  return (
    <SequenceTask tasks={tasks}/>
  );
}
 
export default SequenceTaskExample;