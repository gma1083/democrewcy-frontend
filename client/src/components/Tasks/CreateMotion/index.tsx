import React, { FormEvent } from 'react';
import Task from '../../common/Task';

interface CreateMotionProps {
};
 
 
const CreateMotion: React.SFC<CreateMotionProps> = (props) => {
  console.log('props in motions')
  console.log(props)

  const submit = (event: FormEvent) => alert('motion created!');

  return (
    <Task title='Create a Motion' onSubmit={submit} type='create'>
    </Task>
  );
}
 
export default CreateMotion;