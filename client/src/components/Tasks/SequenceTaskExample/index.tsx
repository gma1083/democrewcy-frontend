import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';
import Task from '../../common/Task';
import SequenceTask from '../../common/SequenceTask';

const submitAlert = (data: any) => alert('submit');
const continueAlert = (data: any) => alert('continue');
const backAlert = (data: any) => alert('back');
const cancelAlert = (data: any) => alert('cancel');

const tasks = [{
  name: 'Step 1',
  component: (
    <Task 
      title='Step 1' 
      submitAction={submitAlert} 
      continueAction={continueAlert}
      goBackAction={backAlert}
      cancelAction={continueAlert}
      type='create' 
      disallowActions={true}
    >

    </Task>
  )
}, {
  name: 'Step 2',
  component: (
    <Task 
      title='Step 2' 
      submitAction={submitAlert} 
      continueAction={continueAlert}
      goBackAction={backAlert}
      cancelAction={continueAlert}
      type='create' 
      disallowActions={true}
    >
    </Task>
  )
}, {
  name: 'Step 3',
  component: (
    <Task 
      title='Step 3' 
      submitAction={submitAlert} 
      continueAction={continueAlert}
      goBackAction={backAlert}
      cancelAction={continueAlert}
      type='create' 
      disallowActions={true}
    >
    </Task>
  )
}, {
  name: 'Step 4',
  component: (
    <Task 
      title='Step 4'
      submitAction={submitAlert} 
      continueAction={continueAlert}
      goBackAction={backAlert}
      cancelAction={continueAlert}
      type='create' 
      disallowActions={true}
    >
    </Task>
  )
}, {
  name: 'Step 5',
  component: (
    <Task 
      title='Step 5' 
      submitAction={submitAlert} 
      continueAction={continueAlert}
      goBackAction={backAlert}
      cancelAction={continueAlert}
      type='create' 
      disallowActions={true}
    >
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