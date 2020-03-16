import * as React from 'react';
import { RelatedAction } from '../../common';
import { Layout, Drawer } from 'antd';
import { TaskTab, TaskType } from '../../../config/types';
import { Actions } from '../../common';
import { closeTask } from '../../../context/actions';

const content: any = {
  actions: [<RelatedAction />, <RelatedAction />],
};

interface ViewDashboardProps {
  dispatch: Function,
  task: TaskTab
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

  done = () => {
    this.props.dispatch(closeTask(this.props.task.key))
  }

  render() {
    console.log('[ViewDashboard] props');
    console.dir(this.props);
    
    const actions = {
      taskType: this.props.task.taskType as TaskType,
      doneAction: this.done
    };

    return (
      <>
        <Layout.Content style={{ height: '100vh', width: '100vw' }}>
          hello this is the dashboard task yo
          <Drawer
            title="Components in Progress"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          > 
            {content[this.state.key]}
          </Drawer>
        </Layout.Content>
        <Actions {...actions} />
      </>
    );
  }
}
 
export default ViewDashboard;