import React from 'react';
import Task from '../../common/Task';
import Form from '../CreateEvent/form';

const submitAlert = (data: any) => alert('submit');
const continueAlert = (data: any) => alert('back');
const backAlert = (data: any) => alert('back');
const cancelAlert = (data: any) => alert('cancel');

export interface Props {
  
}
 
const TaskA: React.SFC<Props> = () => {
  return ( 
    <Task 
      title='Step 1' 
      submitAction={submitAlert} 
      continueAction={continueAlert}
      goBackAction={backAlert}
      cancelAction={cancelAlert}
      type='create' 
      disallowActions={true}
    >
      <Form />
    </Task> 
  );
}
 
const TaskB: React.SFC<Props> = () => {
  return ( 
    <Task 
      title='Step 2' 
      submitAction={submitAlert} 
      continueAction={continueAlert}
      goBackAction={backAlert}
      cancelAction={cancelAlert}
      type='create' 
      disallowActions={true}
    >
    </Task> 
  );
}

const TaskC: React.SFC<Props> = () => {
  return ( 
    <Task 
      title='Step 3' 
      submitAction={submitAlert} 
      continueAction={continueAlert}
      goBackAction={backAlert}
      cancelAction={cancelAlert}
      type='create' 
      disallowActions={true}
    >
    </Task> 
  );
}

const TaskD: React.SFC<Props> = () => {
  return ( 
    <Task 
      title='Step 4' 
      submitAction={submitAlert} 
      continueAction={continueAlert}
      goBackAction={backAlert}
      cancelAction={cancelAlert}
      type='create' 
      disallowActions={true}
    >
    </Task> 
  );
}

const TaskE: React.SFC<Props> = () => {
  return ( 
    <Task 
      title='Step 5' 
      submitAction={submitAlert} 
      continueAction={continueAlert}
      goBackAction={backAlert}
      cancelAction={cancelAlert}
      type='create' 
      disallowActions={true}
    >
    </Task> 
  );
}

export default [{
  name: 'Step 1',
  component: TaskA
}, {
  name: 'Step 2',
  component: TaskB,
}, {
  name: 'Step 3',
  component: TaskC,
}, {
  name: 'Step 4',
  component: TaskD,
}, {
  name: 'Step 5',
  component: TaskE,
}];