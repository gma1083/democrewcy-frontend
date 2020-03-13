import React from 'react';
import { Layout, Tabs, Icon } from 'antd';
import "antd/dist/antd.css";
import { setActiveTaskTab } from '../../context/actions';
import { withAppContext } from '../../context';
import { Context, TaskTab } from '../../config/types';
import { TaskLayout, ContextSelector } from '../../components/common';
const { TabPane } = Tabs;

export interface HomeProps {
  state: Context;
  dispatch: Function;
}
 
const Home: React.FunctionComponent<HomeProps> = (props: any) => {
  const onChange = (activeKey: any) => {
    console.log('setting active task tab')
    console.log(activeKey)
    props.dispatch(setActiveTaskTab(activeKey));
  };

  return ( 
    <Layout style={{ backgroundColor: '#fff', height: '100vh', width: '100vw', padding: '20px' }}>

      <Tabs
        onChange={onChange}
        activeKey={props.state.activeTask}
      >
        {props.state.tasksRunning.map((task: TaskTab) => {
          let CurrentTask = task.content;
          let form: any;
          if (task.taskType === 'create' || task.context.ctx) {
            form = <CurrentTask dispatch={props.dispatch} task={task} type={task.taskType} />;
          } 
          else if (['view', 'edit'].includes(task.taskType) && ! task.context.ctx) {
            form = <ContextSelector {...props} task={task} />;
          }
          return (
            <TabPane style={{height: '100vh'}} tab={task.key} key={task.key} closable={true}>
              <TaskLayout title={task.title} form={form} />
            </TabPane>
          )
        })}
      </Tabs>
    </Layout>
  );
}

export default withAppContext(Home);