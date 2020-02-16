import React, { useState} from 'react';
import { Card, Button, PageHeader, Icon, Modal } from 'antd';
import "antd/dist/antd.css";
import HorizontallyScrollabe from '../HorizontallyScrollable';

interface Position {
  title: string,
  description: string
};

export interface Motion {
  title: string,
  description: string,
  proposedBy: Position
};

export const motionData: Motion[] = [{
  title: 'do the thing',
  description: 'you know wut',
  proposedBy: {
    title: 'President',
    description: 'yeah boi'
  }
}, {
  title: 'not do the thing',
  description: 'not happenin',
  proposedBy: {
    title: 'Vice President',
    description: 'yeah dawg'
  }
}, {
  title: 'maybe do it',
  description: 'possible',
  proposedBy: {
    title: 'Secretary',
    description: 'not sure'
  }
}, {
  title: 'most likely do it',
  description: 'likely',
  proposedBy: {
    title: 'Temporeum Dude',
    description: 'tempo'
  }
}, {
  title: 'Poker',
  description: 'win big',
  proposedBy: {
    title: 'President',
    description: 'ya boi'
  }
}];

export interface MotionsProps {
  motions: Motion[]
};
 
const Motion: React.SFC<Motion> = ({ title, description, proposedBy }) => {
  return (
    <div
      style={{
        display: "flex", 
        flexDirection: "column", 
        padding: '10px',
        minWidth: '300px'
      }}
    >
      <Card
        bordered
        size="default"
        title={title}
        actions={[
          <Button>A</Button>,
          <Button>B</Button>,
          <Button>C</Button>
        ]}
      >
        <div>Description: {description}</div>
        <div>Proposed By: {proposedBy.title}</div>
      </Card>
    </div> 
  )
}

const Motions: React.SFC<MotionsProps> = ({ motions }) => {
  console.log('props in motions');
  console.log(motions);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(! showModal);
  };

  return (
    <React.Fragment>
      <Modal 
        title="Create Motion"
        visible={showModal}
        onOk={toggleModal}
        onCancel={toggleModal}
      >
        Create Motion Content
      </Modal>
      <PageHeader 
        title='Motions' 
        subTitle={<Icon type="plus-circle" onClick={() => toggleModal()}/>} 
        />
      <HorizontallyScrollabe>
        {motions?.map(motion => <Motion {...motion}/>)}
      </HorizontallyScrollabe>
    </React.Fragment>
  );
}
 
export default Motions;