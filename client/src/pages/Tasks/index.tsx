import React from 'react';
import { Layout } from 'antd';
import { SideBar, TaskLayout } from '../../components/common';
import { AppConsumer } from '../../context';
import { Context } from '../../config/types';
import * as Tasks from '../../components/tasks';
import { Route, Redirect } from 'react-router-dom';


export interface TasksProps {

};

export interface TasksPresentationProps {
  state: Context,
  dispatch: Function
}
 
const TasksPresentation: React.SFC<TasksPresentationProps> = (props: any) => {
  console.log('props in TasksPresentation')
  console.log(props)
  
  const { state, dispatch } = props;
  
  let ActiveTaskForm: React.SFC<any> = state.activeTask && (Tasks as any)[state.activeTask.component];
    
  return (
    <Layout>
      <SideBar />

        {state.activeTask ? 
          <Redirect to={`/tasks/${state.activeTask.key}`} /> :
          <Redirect to={`/home`} />}
      
        {state.activeTask && 
            <Route 
              path={`/tasks/:taskId`} 
              component={(props: any) => 
                <TaskLayout
                  title={state.activeTask?.title || ''}
                  form={
                    <ActiveTaskForm 
                      {...props}
                      state={state}
                      dispatch={dispatch}
                      type={state.activeTask?.type}
                    />}
                />}
            />}
      
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