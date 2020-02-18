import React, { FormEvent } from 'react';
import Task from '../../common/Task';

interface CreateMotionProps {
};
 
const submitAlert = (data: any) => alert('submit');
const continueAlert = (data: any) => alert('continue');
const backAlert = (data: any) => alert('back');
const cancelAlert = (data: any) => alert('cancel');


const CreateMotion: React.SFC<CreateMotionProps> = (props) => {
  console.log('props in motions')
  console.log(props)

  const submit = (event: FormEvent) => alert('motion created!');

  return (
    <Task 
      title='Create a Motion' 
      type='create'
      submitAction={submitAlert}
      continueAction={continueAlert}
      goBackAction={backAlert}
      cancelAction={cancelAlert}>
    </Task>
  );
}
 
export default CreateMotion;