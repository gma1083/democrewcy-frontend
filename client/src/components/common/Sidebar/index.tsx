import React from 'react';
import { Layout, Menu, Icon, Avatar, Button, Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import "antd/dist/antd.css";

const { SubMenu } = Menu;
const { Sider } = Layout;

export interface SidebarProps {
  groups: GroupProps[],
  users: UserProps[]
}

export interface GroupProps {
  name: string,
  description: string
};

export interface UserProps {
  firstName: string,
  lastName: string
};

const Sidebar: React.SFC<SidebarProps> = (props) => {
  console.log('props in sidebar')
  console.log(props);
  
  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <div style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '20px'}}>
        <NavLink key='/home' to='/home'>
          <Typography.Title level={3}>
            Democrewcy
          </Typography.Title>
        </NavLink>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['groups']}
        style={{ height: '100%', borderRight: 0 }}
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
          {props.groups?.map(group => <Menu.Item key={group.name}>{group.name}</Menu.Item>)}
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
          {props.users?.map(user => {
            const name = `${user.firstName}.${user.lastName}`;
            return <Menu.Item key={name}>{name}</Menu.Item>
          })}
        </SubMenu>
      </Menu>
    </Sider>
  );
}
 
export default Sidebar;