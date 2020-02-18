import React from 'react';
import Task from '../../common/Task';
import Form from './form';

interface CreateEventProps {
};
 
const submitAlert = (data: any) => alert('submit');
const continueAlert = (data: any) => alert('continue');
const backAlert = (data: any) => alert('back');
const cancelAlert = (data: any) => alert('cancel');

const CreateEvent: React.SFC<CreateEventProps> = (props) => {
  console.log('props in create event')
  console.log(props)

  return (
    <Task 
      title={'Create an Event'} 
      type='create'
      submitAction={submitAlert}
      continueAction={continueAlert}
      goBackAction={backAlert}
      cancelAction={cancelAlert}
    >
      <Form {...props} />
    </Task>
  );
}
 
export default CreateEvent;