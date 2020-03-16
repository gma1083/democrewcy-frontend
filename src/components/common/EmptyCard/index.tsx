import React from './node_modules/react';
import { Card, Skeleton } from './node_modules/antd';

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