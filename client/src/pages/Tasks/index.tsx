import React from 'react';
import { Layout } from 'antd';
import { Sidebar } from '../../components/common';
import { AppConsumer } from '../../context';
import { Context } from '../../config/types';
import * as Tasks from '../../components/Tasks';
import { Route, Redirect } from 'react-router-dom';

export interface TasksProps {

};

export interface TasksPresentationProps {
  state: Context
  match: any
}
 
const TasksPresentation: React.SFC<TasksPresentationProps> = (props) => {
  console.log('props in TasksPresentation')
  console.log(props)
  
  const { state } = props;
  
  let Failure = <div>Error</div>
  let View: React.SFC<any> = state.activeTask ? (Tasks as any)[state.activeTask.component] : Failure;
    
  return (
    <Layout>
      <Sidebar />
        {state.activeTask && <Redirect to={`/tasks/${state.activeTask.key}`} />}
        <Route 
          path={`/tasks/:taskId`} 
          component={View}
        />
    </Layout>
  );
}
 
const TasksContainer: React.SFC<TasksProps> = (props: any) => {  
  console.log('props in Tasks')
  console.log(props)

  return (
    <AppConsumer>
      {(ctx: any) => <TasksPresentation {...ctx} {...props} />}
    </AppConsumer>
  );
}
 
export default TasksContainer;