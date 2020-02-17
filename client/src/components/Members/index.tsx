import React from 'react';
import { Card, PageHeader } from 'antd';
import HorizontallyScrollable from '../HorizontallyScrollable';

export interface Position {
  title: string,
  description: string
};

export interface Member {
  name: string,
  position: Position
};

export const memberData: Member[] = [{
  name: 'tommy.pastrami',
  position: {
    title: 'President',
    description: 'prez'
  },
}, {
  name: 'bella.mortadella',
  position: {
    title: 'Vice President',
    description: 'vice'
  },
}, {
  name: 'johnny.roastbeef',
  position: {
    title: 'Janitor',
    description: 'janitor'
  },
}, {
  name: 'tammi.salami',
  position: {
    title: 'Secretary',
    description: 'sec'
  },
}, {
  name: 'shleeb.fleeb',
  position: {
    title: 'Speaker of the House',
    description: 'spkr'
  },
}, {
  name: 'butt.sniffer',
  position: {
    title: 'President Pro Tempore of the Senate',
    description: 'ppts'
  },
}, {
  name: 'jimmy.butthole',
  position: {
    title: 'Secretary of State',
    description: 'ss'
  },
}, {
  name: 'hugh.jass',
  position: {
    title: 'Secretary of the Treasury',
    description: 'st'
  },
}, {
  name: 'icee.weiner',
  position: {
    title: 'Secretary of Defense',
    description: 'sd'
  },
}];
 
interface MembersProps {
  members: Member[]
};
 
export const Member: React.SFC<Member> = ({ name, position }) => {
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
        {members?.map(member => <Member key={member.name} {...member}/>)}
      </HorizontallyScrollable>
    </React.Fragment>
  );
}
 
export default Members;