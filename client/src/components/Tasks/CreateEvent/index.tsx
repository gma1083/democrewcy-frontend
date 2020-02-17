import React, { FormEvent } from 'react';
import Task from '../../common/Task';
import Form from './form';

interface CreateEventProps {
};
 
 
const CreateEvent: React.SFC<CreateEventProps> = (props) => {
  console.log('props in create event')
  console.log(props)

  const submit = (data: any) => alert(data);

  return (
    <Task title={'Create an Event'} onSubmit={submit} type='create'>
      <Form {...props} />
    </Task>
  );
}
 
export default CreateEvent;