import React, { FormEvent } from 'react';
import Task from '../../common/Task';

interface ViewProfileProps {
};
 
 
const ViewProfile: React.SFC<ViewProfileProps> = (props) => {
  console.log('props in members')
  console.log(props)

  const submit = (event: FormEvent<HTMLFormElement>) => alert('poop!');

  return (
    <Task title='View Profile' onSubmit={submit} type='view'>
    </Task>
  );
}
 
export default ViewProfile;