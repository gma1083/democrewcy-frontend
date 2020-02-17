import React, { FormEvent } from 'react';
import Task from '../../common/Task';

interface CreateGroupProps {
};
 
 
const CreateGroup: React.SFC<CreateGroupProps> = (props) => {
  console.log('props in members')
  console.log(props)

  const submit = (event: FormEvent<HTMLFormElement>) => alert('group created!');

  return (
    <Task title={'Create a Group'} onSubmit={submit} type='create'>
    </Task>
  );
}
 
export default CreateGroup;