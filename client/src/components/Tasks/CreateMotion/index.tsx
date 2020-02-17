import React from 'react';
import Task from '../../common/Task';

interface CreateMotionProps {
};
 
 
const CreateMotion: React.SFC<CreateMotionProps> = (props) => {
  console.log('props in members')
  console.log(props)


  return (
    <Task title='Create a Motion'>
    </Task>
  );
}
 
export default CreateMotion;