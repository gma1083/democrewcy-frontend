import React from 'react';
import Task from '../../common/Task';
import Form from '../CreateEvent/form';

export interface Props {
  next: Function,
  prev: Function,
  cancel: Function,
  submit: Function
}
 
const TaskA: React.SFC<Props> = ({ next, prev, cancel, submit }) => {
  return ( 
    <Task 
      title='Step 1' 
      submitAction={() => submit()} 
      continueAction={() => next()}
      goBackAction={() => prev()}
      cancelAction={() => cancel()}
      type='create' 
    >
      <Form />
    </Task> 
  );
}
 
const TaskB: React.SFC<Props> = ({ next, prev, cancel, submit }) => {
  return ( 
    <Task 
      title='Step 2' 
      submitAction={() => submit()} 
      continueAction={() => next()}
      goBackAction={() => prev()}
      cancelAction={() => cancel()}
      type='create' 
    >
    </Task> 
  );
}

const TaskC: React.SFC<Props> = ({ next, prev, cancel, submit }) => {
  return ( 
    <Task 
      title='Step 3' 
      submitAction={() => submit()} 
      continueAction={() => next()}
      goBackAction={() => prev()}
      cancelAction={() => cancel()}
      type='create' 
    >
    </Task> 
  );
}

const TaskD: React.SFC<Props> = ({ next, prev, cancel, submit }) => {
  return ( 
    <Task 
      title='Step 4' 
      submitAction={() => submit()} 
      continueAction={() => next()}
      goBackAction={() => prev()}
      cancelAction={() => cancel()}
      type='create' 
    >
    </Task> 
  );
}

const TaskE: React.SFC<Props> = ({ next, prev, cancel, submit }) => {
  return ( 
    <Task 
      title='Step 5' 
      submitAction={() => submit()} 
      continueAction={() => next()}
      goBackAction={() => prev()}
      cancelAction={() => cancel()}
      type='create' 
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