import React from 'react';
import { TaskLayout } from '../../common';


export interface Props {
  next: Function,
  prev: Function,
  cancel: Function,
  submit: Function
}
 
const TaskLayoutA: React.SFC<Props> = ({ next, prev, cancel, submit }) => {
  return ( 
    <TaskLayout 
      title='Step 1' 
      form={<div>form</div>}
    />
  );
}
 
const TaskLayoutB: React.SFC<Props> = ({ next, prev, cancel, submit }) => {
  return ( 
    <TaskLayout 
      title='Step 2' 
      form={<div>form</div>}
    /> 
  );
}

const TaskLayoutC: React.SFC<Props> = ({ next, prev, cancel, submit }) => {
  return ( 
    <TaskLayout 
      title='Step 3' 
      form={<div>form</div>}
    />
  );
}

const TaskLayoutD: React.SFC<Props> = ({ next, prev, cancel, submit }) => {
  return ( 
    <TaskLayout 
      title='Step 4' 
      form={<div>form</div>}
    />
  );
}

const TaskLayoutE: React.SFC<Props> = ({ next, prev, cancel, submit }) => {
  return ( 
    <TaskLayout 
      title='Step 5' 
      form={<div>form</div>}
    />
  );
}

export default [{
  name: 'Step 1',
  component: TaskLayoutA
}, {
  name: 'Step 2',
  component: TaskLayoutB,
}, {
  name: 'Step 3',
  component: TaskLayoutC,
}, {
  name: 'Step 4',
  component: TaskLayoutD,
}, {
  name: 'Step 5',
  component: TaskLayoutE,
}];