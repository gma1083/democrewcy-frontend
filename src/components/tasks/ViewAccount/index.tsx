import React from 'react';
import { Layout, Card } from 'antd';
const { Content } = Layout;

interface ViewProfileProps {
  state: any
};

const ViewProfile: React.SFC<ViewProfileProps> = (props) => {
  console.log('[ViewProfile] props')
  console.dir(props)

  return (
    <Content>
      <Card>
        Your Profile
      </Card>
    </Content>
  )
}
 
export default ViewProfile;