import React from 'react';
import Task from '../../common/Task';

interface ViewProfileProps {
};
 
 
const ViewProfile: React.SFC<ViewProfileProps> = (props) => {
  console.log('props in members')
  console.log(props)


  return (
    <Task title='View Profile'>
    </Task>
  );
}
 
export default ViewProfile;