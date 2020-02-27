import React from 'react';
import { Layout, Card } from 'antd';
const { Content } = Layout;

interface ViewProfileProps {
  state: any
};

const ViewProfile: React.SFC<ViewProfileProps> = ({state}) => {
  console.log('state in ViewProfile')
  console.log(state)

  return (
    <Content>
      <Card>
        Your Profile
      </Card>
    </Content>
  )
}
 
export default ViewProfile;