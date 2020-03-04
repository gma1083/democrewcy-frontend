import * as React from 'react';
import { RelatedAction } from '../../common';
import { Layout, Drawer } from 'antd';

const content: any = {
  actions: [<RelatedAction />, <RelatedAction />],
};

interface ViewDashboardProps {

};

class ViewDashboard extends React.Component<ViewDashboardProps> {
  state = {
    key: 'actions',
    visible: false
  };

  onTabChange = (key: any, type: any) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log('[ViewDashboard] props');
    console.dir(this.props);

    return (
      <Layout style={{ height: '100vh', width: '100vw' }}>
        <Drawer
          title="Components in Progress"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        > 
          {content[this.state.key]}
        </Drawer>
      </Layout>
    );
  }
}
 
export default ViewDashboard;