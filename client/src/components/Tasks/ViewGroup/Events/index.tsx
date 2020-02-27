import React, { useState } from 'react';
import { Card, PageHeader, Icon, Modal } from 'antd';
import HorizontallyScrollabe from '../../../common/HorizontallyScrollable';
import { Event } from '../../../../config/types';
// import { EmptyCard } from '../../../common';
import "antd/dist/antd.css";


interface EventsProps {
  events: Event[]
};

const EventPresentation: React.SFC<Event> = ({ name, description, startTime, endTime }) => {
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
        title={name}
        actions={[
          <Icon type="dislike" />,
          <Icon type="info-circle" />,
          <Icon type="like" />
        ]}
      >
        <div>{description}</div>
        <div>{`When? ${new Date(startTime).getMonth()}-${new Date(startTime).getDay()}`}</div>
        <div>{`Til? ${new Date(endTime).getMonth()}-${new Date(endTime).getDay()}`}</div>
      </Card>
    </div>
  )
};



const Events: React.SFC<EventsProps> = ({ events }) => {
  console.log('props in events')
  console.log(events)
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(! showModal);
  };

  return (
    <React.Fragment>
      <Modal 
        title="Create Event"
        visible={showModal}
        onOk={toggleModal}
        onCancel={toggleModal}
      >
        Create Event Content
      </Modal>
      <PageHeader 
        title='Events' 
        subTitle={<Icon type="plus-circle" onClick={() => toggleModal()}/>}
      />
      <HorizontallyScrollabe>
        {events?.map(event => <EventPresentation key={event.name} {...event} />)}
        {/* {Array(5).fill(0).map(item => <EmptyCard  />)} */}
      </HorizontallyScrollabe>
    </React.Fragment>
  );
}
 
export default Events;