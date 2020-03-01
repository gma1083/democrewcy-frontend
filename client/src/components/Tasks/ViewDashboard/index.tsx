import * as React from 'react';
import { RelatedAction } from '../../common';
import { Layout, Card, Drawer } from 'antd';


const tabList: any[] = [
  {
    key: 'Related Action',
    tab: 'Related Action',
  },
  {
    key: 'Related Action2',
    tab: 'Related Action2',
  },
];

const contentList: any = {
  tab1: [<RelatedAction />, <RelatedAction />],
  tab2: [<RelatedAction />, <RelatedAction />]
};

interface ViewDashboardProps {

};

class ViewDashboard extends React.Component<ViewDashboardProps> {
  state = {
    key: 'tab1',
    noTitleKey: 'app',
    visible: true
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
    return (
      <Layout style={{ height: '100vh', width: '100vw' }}>
        <Drawer
          title="Components in Progress"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        > 
          {contentList[this.state.key]}
        </Drawer>
      </Layout>
    );
  }
}
 
export default ViewDashboard;