import React, { FormEvent } from 'react';
import Task from '../../common/Task';
import { Events, Members, Motions } from '../../';
import { AppConsumer } from '../../../context';
import { Layout } from 'antd';
import { Group } from '../../../config/types';

const { Content } = Layout;

interface ViewGroupProps {
};
 
const submitAlert = (data: any) => alert('submit');
const continueAlert = (data: any) => alert('continue');
const backAlert = (data: any) => alert('back');
const cancelAlert = (data: any) => alert('cancel');

const ViewGroup: React.SFC<ViewGroupProps> = (props: any) => {
  console.log('props in viewgroup')
  console.log(props)

  const View = (ctx: any) => {
    const group: Group = ctx?.state.groups.find((g: Group) => g.name === ctx.state.activeGroup.name);
    return (
      <Content>
        <Members members={group.members} />
        <Events  events={group.events} />
        <Motions motions={group.motions} />
      </Content>
    )
  };

  return (
    <AppConsumer>
      {(ctx: any) =>
        <Task 
          title='View a Group' 
          subTitle={ctx.state.activeGroup.name} 
          type='view'
          submitAction={submitAlert}
          continueAction={continueAlert}
          goBackAction={backAlert}
          cancelAction={cancelAlert}
        >
          <View {...ctx}/>
        </Task>}
    </AppConsumer>
  );
}
 
export default ViewGroup;