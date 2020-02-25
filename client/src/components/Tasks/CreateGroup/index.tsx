import React, { FormEvent } from 'react';
import Task from '../../common/Task';
import Form from './form';

interface CreateGroupProps {
};
 
const submitAlert = (data: any) => alert('submit');
const continueAlert = (data: any) => alert('continue');
const backAlert = (data: any) => alert('back');
const cancelAlert = (data: any) => alert('cancel');

const CreateGroup: React.SFC<CreateGroupProps> = (props) => {
  console.log('props in members')
  console.log(props)

  const submit = (event: FormEvent) => alert('group created!');

  return (
    <Task 
      title={'Create a Group'} 
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
 
export default CreateGroup;