import React from 'react';
import Task from '../../common/Task';

interface CreateGroupProps {
};
 
 
const CreateGroup: React.SFC<CreateGroupProps> = (props) => {
  console.log('props in members')
  console.log(props)


  return (
    <Task title={'Create a Group'}>
    </Task>
  );
}
 
export default CreateGroup;