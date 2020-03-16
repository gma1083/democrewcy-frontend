import React from 'react';
import { Card, Skeleton } from 'antd';

const EmptyCard: React.FunctionComponent = () => 
  <div
    style={{
      display: "flex", 
      flexDirection: "column", 
      padding: '10px',
      minWidth: '300px'
    }}
  >
    <Card bordered>
      <Skeleton active/>
    </Card>
  </div>


export default EmptyCard;