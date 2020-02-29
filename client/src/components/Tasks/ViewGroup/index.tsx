import React from 'react';
import { Events, Members, Motions } from '../..';
import { Layout, Typography } from 'antd';
import { Group } from '../../../config/types';
import { Selector } from '../../../components/common';

const { Content } = Layout;

interface ViewGroupProps {
  state: any
};

const ViewGroup: React.SFC<ViewGroupProps> = ({state}) => {
  console.log('state in viewgroup')
  console.log(state)

  const { groups, activeGroup } = state;

  const group: Group = activeGroup ? groups.find((group: Group) => group.name === activeGroup.name) : null;

  return (
    <Content>
      {group ?
        <>
          <Members members={group.members} />
          <Events events={group.events} />
          <Motions motions={group.motions} />
        </> : 
        <>
          poop
        </>}
    </Content>
  )
}
 
export default ViewGroup;