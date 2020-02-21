import React from 'react';
import "antd/dist/antd.css";
import { AppConsumer } from '../../context';
import * as Tasks from '../Tasks';
import { Route } from 'react-router-dom';

export interface TaskManagerContainerProps {
  activeTask: any
}
 
const TaskManager: React.SFC<TaskManagerContainerProps> = ({ activeTask }) => {
  console.dir(activeTask);
  let View: React.SFC<any> = (Tasks as any)[activeTask.component] || <div>Task Manager has failed you.</div>;

  return <View />;
}
 

export interface TaskManagerProps {
  
}
 
const TaskManagerContainer: React.SFC<TaskManagerProps> = () => {
  return ( 
    <AppConsumer>
      {(ctx: any) => (
        <TaskManager activeTask={ctx.state.activeTask} />
      )}
    </AppConsumer>
   );
}
 
export default TaskManagerContainer;