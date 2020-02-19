import React, { useState } from 'react';
import Task from '../../common/Task';
import Form from './form';
import { Spin } from 'antd';

interface CreateEventProps {
};
 

const CreateEvent: React.SFC<CreateEventProps> = (props) => {
  const [loading, setLoading] = useState(true);
  console.log('props in create event')
  console.log(props);

  const submitAlert = (data: any) => alert('submit');
  const continueAlert = (data: any) => alert('continue');
  const backAlert = (data: any) => alert('back');
  const toggleLoading = () => setLoading(!loading);

  return (
    <Task 
      title={'Create an Event'} 
      type='create'
      submitAction={submitAlert}
      continueAction={continueAlert}
      goBackAction={backAlert}
      cancelAction={toggleLoading}
    >
      <Spin spinning={loading}>
        <Form {...props} />
      </Spin>
    </Task>
  );
}
 
export default CreateEvent;