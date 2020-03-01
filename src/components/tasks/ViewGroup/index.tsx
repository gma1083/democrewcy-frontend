import React from 'react';
import { Events, Members, Motions } from '../..';
import { PageHeader, Layout } from 'antd';
import { setTaskContext } from '../../../context/actions';

const { Content } = Layout;

interface ViewGroupProps {
  state: any,
  dispatch: Function
};

const ViewGroup: React.FunctionComponent<ViewGroupProps> = (props) => {
  console.log('props in viewgroup')
  console.log(props)

  const { state, dispatch } = props;
  const { ctx } = state.taskCtx; 

  return (
    <Content>
      <PageHeader title={ctx.name} onBack={() => dispatch(setTaskContext(null))}/>
      <Members members={undefined} />
      <Events events={ctx.events} />
      <Motions motions={ctx.motions} />
    </Content>
  )}

export default ViewGroup;