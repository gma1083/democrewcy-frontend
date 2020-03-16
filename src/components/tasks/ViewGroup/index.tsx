import React, { useState, useEffect } from 'react';
import Events from './Events';
import Positions from './Positions';
import Motions from './Motions';
import { PageHeader, Spin } from 'antd';
import { setTaskContextId, asyncRequest, setTaskContextInstance, closeTask } from '../../../context/actions';
import { CancelToken, TaskTab, Group, TaskType } from '../../../config/types';
import { Actions } from '../../common';
import { getClassProperties } from '../../../config/requests';


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
        setIsLoading(true);
        const classProps: any = await asyncRequest(getClassProperties(task.context.type));
        const { data } = classProps;
        const relationshipsToPopulate = data.relationships.reduce((acc: any, cur: any) => Object.assign(acc, { [cur.name]: true }), {});
        let groupOpts = {
          method: 'post',
          url: `/mira/get`,
          data: {
            className: task.context.type,
            id: task.context.instanceId,
            ...relationshipsToPopulate
          }
        };
        const instance: any = await asyncRequest(groupOpts);
        setIsLoading(false);
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