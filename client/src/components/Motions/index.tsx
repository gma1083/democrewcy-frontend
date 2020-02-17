import React, { useState} from 'react';
import { Card, PageHeader, Icon, Modal } from 'antd';
import "antd/dist/antd.css";
import HorizontallyScrollabe from '../HorizontallyScrollable';
import { Motion } from '../../config/types';

export interface MotionsProps {
  motions: Motion[]
};
 
const MotionPresentation: React.SFC<Motion> = ({ title, description, proposedBy }) => {
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
          <Icon type="dislike" />,
          <Icon type="info-circle" />,
          <Icon type="like" />
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
        {motions?.map(motion => <MotionPresentation key={motion.title} {...motion}/>)}
      </HorizontallyScrollabe>
    </React.Fragment>
  );
}
 
export default Motions;