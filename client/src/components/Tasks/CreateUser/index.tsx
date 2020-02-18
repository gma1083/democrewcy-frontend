
import React, { FormEvent } from 'react';
import Task from '../../common/Task';

interface CreateUserProps {
};
 
 
const CreateUser: React.SFC<CreateUserProps> = (props) => {
  console.log('props in create user')
  console.log(props)

  const submit = (event: FormEvent) => alert('user created!');

  return (
    <Task title='Create a User' onSubmit={submit} type='create'>
    </Task>
  );
}
 
export default CreateUser;