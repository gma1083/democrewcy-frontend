import React, { useState} from 'react';
import { Card, PageHeader, Icon, Modal } from 'antd';
import "antd/dist/antd.css";
import HorizontallyScrollabe from '../../../common/HorizontallyScrollable';
import { Position } from '../../../../config/types';
import { EmptyCard } from '../../../common';


const PositionPresentation: React.FunctionComponent<Position> = ({ title, description, displayAs }) => {
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
        title={displayAs}
        actions={[
          <Icon  />,
          <Icon type="info-circle" />,
          <Icon  />
        ]}
      >
        <div>{title}</div>
        <div>{description}</div>
      </Card>
    </div> 
  )
}


export interface PositionsProps {
  positions?: Position[]
};
 
const Positions: React.SFC<PositionsProps> = ({ positions }) => {
  console.log('props in Positions');
  console.log(positions);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(! showModal);
  };

  return (
    <React.Fragment>
      <Modal 
        title="Create Position"
        visible={showModal}
        onOk={toggleModal}
        onCancel={toggleModal}
      >
        Create Position Content
      </Modal>
      <PageHeader 
        title='Positions' 
        subTitle={<Icon type="plus-circle" onClick={() => toggleModal()}/>} 
        />
      <HorizontallyScrollabe>
        {positions ? 
          positions.map((position: Position) => <PositionPresentation key={position.title} {...position} />) :
          Array(5).fill(0).map((item: any, idx: number) => <EmptyCard key={idx} />)}
      </HorizontallyScrollabe>
    </React.Fragment>
  );
}
 
export default Positions;