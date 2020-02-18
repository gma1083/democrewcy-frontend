import React, { FormEvent } from 'react';
import Task from '../../common/Task';

interface ViewProfileProps {
};
 
const submitAlert = (data: any) => alert('submit');
const continueAlert = (data: any) => alert('continue');
const backAlert = (data: any) => alert('back');
const cancelAlert = (data: any) => alert('cancel');

const ViewProfile: React.SFC<ViewProfileProps> = (props) => {
  console.log('props in members')
  console.log(props)

  const submit = (event: FormEvent) => alert('poop!');

  return (
    <Task 
      title='View Profile' 
      type='view'
      submitAction={submitAlert}
      continueAction={continueAlert}
      goBackAction={backAlert}
      cancelAction={cancelAlert}
    >
    </Task>
  );
}
 
export default ViewProfile;