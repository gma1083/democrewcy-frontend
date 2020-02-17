import React, { FormEvent } from 'react';
import Task from '../../common/Task';

interface CreateEventProps {
};
 
 
const CreateEvent: React.SFC<CreateEventProps> = (props) => {
  console.log('props in create event')
  console.log(props)

  const submit = (event: FormEvent<HTMLFormElement>) => alert('event created!');

  return (
    <Task title={'Create an Event'} onSubmit={submit} type='create'>
    </Task>
  );
}
 
export default CreateEvent;