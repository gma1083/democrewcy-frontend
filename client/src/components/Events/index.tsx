import React, { useState } from 'react';
import { Card, PageHeader, Icon, Modal } from 'antd';
import HorizontallyScrollabe from '../HorizontallyScrollable';

import "antd/dist/antd.css";

export interface Event {
  name: string, 
  description: string, 
  startTime: string, 
  endTime: string
};

interface EventsProps {
  events: Event[]
};

export const eventData: Event[] = [{
  name: 'party time', 
  description: 'get crunk', 
  startTime: new Date().toString(), 
  endTime: new Date().toString()
}, {
  name: 'chill time', 
  description: 'get chill', 
  startTime: new Date().toString(), 
  endTime: new Date().toString()
}, {
  name: 'bday time', 
  description: 'bday party time', 
  startTime: new Date().toString(), 
  endTime: new Date().toString()
}, {
  name: 'movie', 
  description: 'watch it', 
  startTime: new Date().toString(), 
  endTime: new Date().toString()
}, {
  name: 'vegas', 
  description: 'win big', 
  startTime: new Date().toString(), 
  endTime: new Date().toString()
}, {
  name: 'behamas', 
  description: 'git tan', 
  startTime: new Date().toString(), 
  endTime: new Date().toString()
}, {
  name: 'antarctica', 
  description: 'git cold', 
  startTime: new Date().toString(), 
  endTime: new Date().toString()
}];

const Event: React.SFC<Event> = ({ name, description, startTime, endTime }) => {
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
          <Icon type="arrow-down" />,
          <Icon type="info-circle" />,
          <Icon type="arrow-up" />
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
        {events?.map(event => <Event key={event.name} {...event} />)}
      </HorizontallyScrollabe>
    </React.Fragment>
  );
}
 
export default Events;