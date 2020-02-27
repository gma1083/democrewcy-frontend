import React from 'react';
import { Layout, Menu, Icon, Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import { TaskBar } from '../index';
import "antd/dist/antd.css";
import { AppConsumer } from '../../../context';
import { setActiveGroup, setActiveTask } from '../../../context/actions';
import { Context, Group, Task, User } from '../../../config/types';

const { SubMenu } = Menu;
const { Sider } = Layout;

export interface SideBarProps {
  state: Context,
  dispatch: Function
}

export interface GroupProps {
  name: string,
  description: string
};

export interface UserProps {
  firstName: string,
  lastName: string
};

const SideBarPresentation: React.SFC<SideBarProps> = (props) => {
  console.log('props in SideBar')
  console.log(props);

  const dispatchViewGroupTask = (group: Group) => {
    props.dispatch(setActiveTask({
      key: "view-group",
      title: 'View a Group',
      component: 'ViewGroup',
      type: 'view'
    }));
    props.dispatch(setActiveGroup(group));
  };

  const dispatchCancelTask = () => {
    props.dispatch(setActiveTask({} as Task));
  }
  
  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <div style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '10px'}}>
        <NavLink key='/home' to='/home' onClick={() => dispatchCancelTask()}>
          <Typography.Title level={3}>
            Democrewcy
          </Typography.Title>
        </NavLink>
      </div>
      <TaskBar 
        tasks={props.state.tasks} 
        dispatchTask={(task: Task) => props.dispatch(setActiveTask(task))} 
      />
      <Menu
        mode="inline"
        defaultOpenKeys={['Groups', 'Direct Messages']}
        style={{ height: '100%', borderRight: 0 }}
      >

        <SubMenu
          key="Groups"
          title={
            <span>
              <Icon type="user" />
              Groups
            </span>
          }
        >
          {props.state.groups?.map((group: Group) => 
            <Menu.Item 
              key={group.name} 
              onClick={() => dispatchViewGroupTask(group)}
            >
              {group.name}
            </Menu.Item>)}
        </SubMenu>

        <SubMenu
          key="Direct Messages"
          title={
            <span>
              <Icon type="laptop" />
              Direct Messages
            </span>
          }
        >
          {props.state.users?.map((user: User) => {
            const name = `${user.firstName}.${user.lastName}`;
            return <Menu.Item key={name}>{name}</Menu.Item>
          })}
        </SubMenu>

      </Menu>
    </Sider>
  );
}

const SideBar: React.SFC<{}> = (props: any) => {
  return (
    <AppConsumer>
      {(ctx: any) => <SideBarPresentation {...ctx} {...props}/>}
    </AppConsumer>
  )
} 
 
export default SideBar;