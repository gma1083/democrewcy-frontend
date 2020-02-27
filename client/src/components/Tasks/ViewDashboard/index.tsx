import * as React from 'react';
import { RelatedAction } from '../../common';
import { Card } from 'antd';


const tabList: any[] = [
  {
    key: 'Related Action',
    tab: 'Related Action',
  },
  {
    key: 'Up Next',
    tab: 'Up Next',
  },
];

const contentList: any = {
  tab1: [<RelatedAction />, <RelatedAction />],
  tab2: <p>Not Sure</p>,
};

interface ViewDashboardProps {

};

class ViewDashboard extends React.Component<ViewDashboardProps> {
  state = {
    key: 'tab1',
    noTitleKey: 'app',
  };

  onTabChange = (key: any, type: any) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <Card
          style={{ width: '50%', textAlign: 'center' }}
          title="Components In Progress"
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={key => {
            this.onTabChange(key, 'key');
          }}
        >
          {contentList[this.state.key]}
        </Card>
      </div>
    );
  }
}
 
export default ViewDashboard;