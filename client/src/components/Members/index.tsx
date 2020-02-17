import React from 'react';
import { Card, PageHeader } from 'antd';
import HorizontallyScrollable from '../HorizontallyScrollable';
import { Member } from '../../config/types';

interface MembersProps {
  members: Member[]
};
 
export const MemberPresentation: React.SFC<Member> = ({ name, position }) => {
  return (
    <div 
      style={{
        display: "flex", 
        flexDirection: "column", 
        padding: '10px',
        height: 'fit-content'
      }}
    >
      <Card title={name}>
        {position.title}
      </Card>
    </div>
  );
}
 
const Members: React.SFC<MembersProps> = ({ members }) => {
  console.log('props in members')
  console.log(members)

  return (
    <React.Fragment>
      <PageHeader title='Members' />
      <HorizontallyScrollable>
        {members?.map(member => <MemberPresentation key={member.name} {...member}/>)}
      </HorizontallyScrollable>
    </React.Fragment>
  );
}
 
export default Members;