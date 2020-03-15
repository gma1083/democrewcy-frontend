import React, { useEffect } from 'react';
import { Layout, Tabs } from 'antd';
import "antd/dist/antd.css";
import { setActiveTaskTab, closeTask, asyncRequest, setClassModels } from '../../context/actions';
import { getClassNames, getClassProperties } from '../../context/requests';
import { withAppContext } from '../../context';
import { Context, TaskTab } from '../../config/types';
import { TaskLayout, ContextSelector } from '../../components/common';

const { TabPane } = Tabs;

export interface HomeProps {
  state: Context;
  dispatch: Function;
}
 
const Home: React.FunctionComponent<HomeProps> = (props: any) => {
  const { state, dispatch } = props;

  useEffect(() => {
    async function onMount() {
      const classNamesResponse = await asyncRequest(getClassNames());
      let classModelsResponses = classNamesResponse?.data.map((name: string) => asyncRequest(getClassProperties(name)));
      classModelsResponses = await Promise.all(classModelsResponses);
      const classModels = classModelsResponses.reduce((acc: any, cur: any) => 
        Object.assign(acc, { [cur.config.url.split("/").pop()]: cur.data }), {});
      dispatch(setClassModels(classModels));
    }
    onMount();

    return function onDismount() {
      console.log('cleanin up Home');
    }
  }, [dispatch]);

  const onChange = (activeKey: any) => {
    console.log('setting active task tab')
    console.log(activeKey)
    dispatch(setActiveTaskTab(activeKey));
  };

  const onEdit = (targetKey: string | React.MouseEvent<HTMLElement, MouseEvent>, action: "add" | "remove") => {
    if (action === 'remove') {
      dispatch(closeTask(targetKey as string));
    }
  };

  return ( 
    <Layout style={{ backgroundColor: '#fff', height: '100vh', width: '100vw', paddingTop: '10px' }}>

      <Tabs
        onChange={onChange}
        activeKey={state.activeTask}
        type="editable-card"
        onEdit={onEdit}
        hideAdd
      >
        {state.tasksRunning.map((taskTab: TaskTab) => {
          let TaskComponent = taskTab.content;
          let task: React.ReactNode;
          if (taskTab.taskType === 'create' || taskTab.context.instanceId) {
            task = <TaskComponent dispatch={dispatch} task={taskTab} type={taskTab.taskType} />;
          } 
          else if (['view', 'edit'].includes(taskTab.taskType) && ! taskTab.context.instanceId) {
            task = <ContextSelector {...props} task={taskTab} />;
          }
          return (
            <TabPane tab={taskTab.title} key={taskTab.key} closable={true}>
              <TaskLayout title={taskTab.title} task={task} />
            </TabPane>
          )
        })}
      </Tabs>
    </Layout>
  );
}

export default withAppContext(Home);