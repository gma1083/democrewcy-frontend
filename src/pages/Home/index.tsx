import React from 'react';
import { Layout, Tabs } from 'antd';
import "antd/dist/antd.css";
import { withAppContext } from '../../context';
import { Context, TaskTab } from '../../config/types';
import { TaskLayout, ContextSelector } from '../../components/common';
const { TabPane } = Tabs;

export interface HomeProps {
  state: Context;
  dispatch: Function;
}
 
const Home: React.FunctionComponent<HomeProps> = (props: any) => {
  return ( 
    <Layout style={{ backgroundColor: '#fff', height: '100vh', width: '100vw', padding: '20px' }}>

      <Tabs
        onChange={f=>f}
        activeKey={props.state.activeTask}
        type="editable-card"
        onEdit={f=>f}
      >

        {props.state.tasksRunning.map((task: TaskTab) => {

          let CurrentTask = task.content;

          return (
            <TabPane style={{height: '100vh'}} tab={task.title} key={task.key} closable={true}>
              <TaskLayout
                title={task.title}
                form={task.taskType === 'create' || task.context.ctx ?
                  <CurrentTask dispatch={props.dispatch} task={task} /> :
                  <ContextSelector {...props} task={task} />
                }
              />
            </TabPane>
          )
        })}

      </Tabs>
    </Layout>
  );
}
 

  // onChange = (activeKey: any) => {
  //   this.setState({ activeKey });
  // };

  // onEdit = (targetKey: any, action: any) => {
  //   console.log('edit action!!')
  //   console.dir(targetKey)
  //   console.dir(action)
  //   return (this as any)[(action as any)](targetKey);
  // };

  // add = () => {
  //   const { panes } = this.state;
  //   const activeKey = `newTab${this.state.newTabIndex}`;
  //   panes.push({ title: `Tab ${this.state.newTabIndex}`, content: 'Content of new tab', key: activeKey });
  //   this.setState({ panes, activeKey, newTabIndex: this.state.newTabIndex + 1 });
  // };

  // remove = (targetKey: any) => {
  //   let { activeKey } = this.state;
  //   let lastIndex;
  //   this.state.panes.forEach((pane, i) => {
  //     if (pane.key === targetKey) {
  //       lastIndex = i - 1;
  //     }
  //   });
  //   const panes = this.state.panes.filter(pane => pane.key !== targetKey);
  //   if (panes.length && activeKey === targetKey) {
  //     if (lastIndex && lastIndex >= 0) {
  //       activeKey = panes[lastIndex].key;
  //     } else {
  //       activeKey = panes[0].key;
  //     }
  //   }
  //   this.setState({ panes, activeKey, newTabIndex: this.state.newTabIndex - 1 });
  // };
  
 
export default withAppContext(Home);