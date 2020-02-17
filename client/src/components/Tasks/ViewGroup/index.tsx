import React, { FormEvent } from 'react';
import Task from '../../common/Task';
import { Events, Members, Motions } from '../../';
import { AppConsumer } from '../../../context';
import { Layout } from 'antd';
const { Content } = Layout;

interface ViewGroupProps {
};
 
 
const ViewGroup: React.SFC<ViewGroupProps> = (props: any) => {
  console.log('props in viewgroup')
  console.log(props)

  const submit = (event: FormEvent<HTMLFormElement>) => alert('poop!');

  const View = (ctx: any) => {
    console.log('view ctx in group')
    console.log(ctx)
    const group: any = ctx?.state.groups.find((g: any) => g.name === ctx.state.activeGroup.name);
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
        <Task title='View a Group' subTitle={ctx.state.activeGroup.name} onSubmit={submit} type='view'>
          <View {...ctx}/>
        </Task>}
    </AppConsumer>
  );
}
 
export default ViewGroup;