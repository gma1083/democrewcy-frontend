import React from 'react';
import { Layout, Menu, Icon, Avatar, Button, Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import { TaskBar } from '../index';
import "antd/dist/antd.css";
import { AppConsumer } from '../../../context';

const { SubMenu } = Menu;
const { Sider } = Layout;

export interface SidebarProps {
  state: any,
  dispatch: any
}

export interface GroupProps {
  name: string,
  description: string
};

export interface UserProps {
  firstName: string,
  lastName: string
};

const SidebarPresentation: React.SFC<SidebarProps> = (props) => {
  console.log('props in sidebar')
  console.log(props);
  
  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <div style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '10px'}}>
        <NavLink key='/home' to='/home'>
          <Typography.Title level={3}>
            Democrewcy
          </Typography.Title>
        </NavLink>
      </div>
      <TaskBar 
        tasks={props.state.tasks} 
        dispatchTask={(task: any) => props.dispatch({type: "SET_ACTIVE_TASK", data: { activeTask: task }})} 
      />
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['groups']}
        style={{ height: '100%', borderRight: 0 }}
        inlineCollapsed={true}
      >
        <SubMenu
          key="groups"
          title={
            <span>
              <Icon type="user" />
              Groups
            </span>
          }
        >
          {props.state.groups?.map((group: any) => 
            <Menu.Item key={group.name}>
              <NavLink key='/group' to='/group'>
                {group.name}
              </NavLink>
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
          {props.state.users?.map((user: any) => {
            const name = `${user.firstName}.${user.lastName}`;
            return <Menu.Item key={name}>{name}</Menu.Item>
          })}
        </SubMenu>
      </Menu>
    </Sider>
  );
}

const Sidebar: React.SFC<{}> = (props: any) => {
  return (
    <AppConsumer>
      {(ctx: any) => <SidebarPresentation {...ctx} {...props}/>}
    </AppConsumer>
  )
} 
 
export default Sidebar;