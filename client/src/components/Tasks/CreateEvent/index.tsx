import React from 'react';
import Task from '../../common/Task';

interface CreateEventProps {
};
 
 
const CreateEvent: React.SFC<CreateEventProps> = (props) => {
  console.log('props in create event')
  console.log(props)


  return (
    <Task title={'Create an Event'}>
    </Task>
  );
}
 
export default CreateEvent;