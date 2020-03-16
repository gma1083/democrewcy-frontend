import React from 'react';
import { Layout, Card } from 'antd';
import { TaskTab, TaskType } from '../../../config/types';
import { Actions } from '../../common';
import { closeTask } from '../../../context/actions';

const { Content } = Layout;


interface ViewProfileProps {
  dispatch: Function,
  task: TaskTab
};

const ViewProfile: React.SFC<ViewProfileProps> = (props) => {
  console.log('[ViewProfile] props')
  console.dir(props)

  const done = () => {
    props.dispatch(closeTask(props.task.key))
  }

  const actions = {
    taskType: props.task.taskType as TaskType,
    doneAction: done
  };

  return (
    <>
      <Content>
        <Card>
          Your Profile
        </Card>
      </Content>
      <Actions {...actions} />
    </>
  )
}
 
export default ViewProfile;