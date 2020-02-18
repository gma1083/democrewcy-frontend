
import React, { FormEvent } from 'react';
import Task from '../../common/Task';

interface CreateUserProps {
};
 
const submitAlert = (data: any) => alert('submit');
const continueAlert = (data: any) => alert('continue');
const backAlert = (data: any) => alert('back');
const cancelAlert = (data: any) => alert('cancel');


const CreateUser: React.SFC<CreateUserProps> = (props) => {
  console.log('props in create user')
  console.log(props)

  const submit = (event: FormEvent) => alert('user created!');

  return (
    <Task 
      title='Create a User'
      type='create'
      submitAction={submitAlert}
      continueAction={continueAlert}
      goBackAction={backAlert}
      cancelAction={cancelAlert}>
    </Task>
  );
}
 
export default CreateUser;