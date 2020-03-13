import React, { useState, useEffect } from 'react';
import Events from './Events';
import Positions from './Positions';
import Motions from './Motions';
import { PageHeader, Layout, Spin, Form } from 'antd';
import { setTaskContextId, asyncRequest, setTaskContextInstance, closeTask } from '../../../context/actions';
import { CancelToken, TaskTab, Group, TaskType } from '../../../config/types';
import { Actions } from '../../common';

const { Content } = Layout;

interface ViewGroupProps {
  dispatch: Function,
  task: TaskTab
};

const ViewGroup: React.FunctionComponent<ViewGroupProps> = (props) => {
  console.log('[ViewGroup] props')
  console.dir(props);

  const [isLoading, setIsLoading] = useState(false);

  const { dispatch, task } = props;
  
  useEffect(() => {
    const cancelToken = CancelToken;
    const source = cancelToken.source();

    async function getInstance() {
      try {
        let classPropsOpts = {
          method: 'get',
          url: `/mira/${task.context.type}`,
          data: { }
        };
        setIsLoading(true);
        const classProps: any = await asyncRequest(classPropsOpts);
        console.log('classProps');
        console.dir(classProps);

        const { data } = classProps;
        const relationshipsToPopulate = data.relationships.reduce((acc: any, cur: any) => Object.assign(acc, { [cur.name]: true }), {});
        let groupOpts = {
          method: 'post',
          url: `/mira/get`,
          data: {
            className: task.context.type,
            id: task.context.ctx,
            ...relationshipsToPopulate
          }
        };
        console.log('groupOpts');
        console.dir(groupOpts);

        const instance: any = await asyncRequest(groupOpts);
        setIsLoading(false);
        console.log('>> req to get instance for ViewGroup');
        console.dir(instance);
        dispatch(setTaskContextInstance(task.key, instance.data))
      } 
      catch (err) {
        console.log('ruh ohh');
        console.dir(err);
        setIsLoading(false);
      }
    }
    if (!task.context.instance)
      getInstance();

    return () => {
      source.cancel();
    }
    
  }, [task, dispatch]);


  const actions = {
    taskType: task.taskType as TaskType,
    doneAction: () => dispatch(closeTask(task.key))
  };

  const group = task.context.instance as Group;

  return (
    <>
      <Spin spinning={isLoading} style={{height: '100vh'}}>
        <PageHeader title={group?.name} onBack={() => dispatch(setTaskContextId(task.key, null))} />
        <Positions positions={group?.positions} />
        <Events events={group?.events} />
        <Motions motions={group?.motions} />
      </Spin>
      <Actions {...actions}/>
    </>
  )}

export default ViewGroup;