import React from 'react';
import Task from '../../common/Task';

interface CreateUserProps {
};
 
 
const CreateUser: React.SFC<CreateUserProps> = (props) => {
  console.log('props in members')
  console.log(props)


  return (
    <Task title='Create a User'>
    </Task>
  );
}
 
export default CreateUser;