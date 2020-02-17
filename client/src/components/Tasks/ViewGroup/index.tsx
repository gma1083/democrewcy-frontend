import React from 'react';
import Task from '../../common/Task';

interface ViewGroupProps {
};
 
 
const ViewGroup: React.SFC<ViewGroupProps> = (props) => {
  console.log('props in members')
  console.log(props)


  return (
    <Task title='View a Group'>
    </Task>
  );
}
 
export default ViewGroup;