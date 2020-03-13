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
            form = <CurrentTask dispatch={props.dispatch} task={task} />;
          } 
          else if (['view', 'edit'].includes(task.taskType) && ! task.context.ctx) {
            form = <ContextSelector {...props} task={task} />;
          }
          return (
            <TabPane style={{height: '100vh'}} tab={task.key} key={task.key} closable={true}>
              <TaskLayout
                title={task.title}
                form={form}
              />
            </TabPane>
          )
        })}
      </Tabs>
    </Layout>
  );
}
 

  
  

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