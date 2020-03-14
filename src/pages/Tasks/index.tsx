import React from 'react';
import { Layout } from 'antd';
import { TaskLayout } from '../../components/common';
import { withAppContext } from '../../context';
import { Context } from '../../config/types';
import * as Tasks from '../../components/tasks';
import { Route, Redirect } from 'react-router-dom';
import { ContextSelector } from '../../components/common';

export interface TasksProps {
  state: Context;
  dispatch: Function;
}
 
const TasksContainer: React.FunctionComponent<TasksProps> = (props: any) => {

  const { state, dispatch } = props;
  const ActiveTask = state.activeTask && (Tasks as any)[state.activeTask.component];
    
  return (
    <Layout>

        {state.activeTask ? 
          <Redirect to={`/tasks/${state.activeTask.key}`} /> :
          <Redirect to={`/home`} />}
          
        {state.activeTask && 
            <Route 
              path={`/tasks/:taskId`} 
              component={(props: any) => 
                <TaskLayout
                  title={state.activeTask?.title || ''}
                  task={state.activeTask.type === 'create' || state.taskCtx.ctx ?
                    <ActiveTask
                      {...props}
                      state={state}
                      dispatch={dispatch}
                      type={state.activeTask?.type}
                    /> :
                    <ContextSelector 
                      {...props}
                      state={state}
                      dispatch={dispatch}
                      type={'edit'}
                      ctxType={state.taskCtx.type}
                    />}
                  />}
                />}
    </Layout>
  );
}
 
export default withAppContext(TasksContainer);