import React, { useState, useEffect } from 'react';
import { Layout, Menu, Icon, Typography, Spin } from 'antd';
import { NavLink } from 'react-router-dom';
import { TaskBar } from '../index';
import "antd/dist/antd.css";
import { withAppContext } from '../../../context';
import { setActiveTask, cancelTask, setSideBarContext } from '../../../context/actions';
import { Context, Group, Task, User, SideBarContext } from '../../../config/types';
import axios from '../../../config/axios';

const { SubMenu } = Menu;
const { Sider } = Layout;

export interface SideBarProps {
  state: Context,
  dispatch: Function
}

const SideBar: React.FunctionComponent<SideBarProps> = (props) => {
  console.log('props in SideBar')
  console.log(props);

  const [isLoading, setLoading] = useState(false);
  const { dispatch } = props;

  useEffect(() => {
    async function onMount() {
      // fetch groups on load
      console.log('SideBar init -- onMount()')
      setLoading(true);
      const groupOptions = {
        className: 'Group',
        page: 0,
        pageSize: 100
      }
      let groupsResponse = await axios.post('/mira/getInstances', groupOptions);
      let groups: any[] = groupsResponse.data.instances;

      // fetch users on load
      const userOptions = {
        className: 'User',
        page: 0,
        pageSize: 100
      }
      let usersResponse = await axios.post('/mira/getInstances', userOptions)
      let users: any[] = usersResponse.data.instances;

      const ctx: SideBarContext = { users, groups };
      dispatch(setSideBarContext(ctx));
      setLoading(false)
    }
    onMount();
    // set as sidebar context
    return function cleanup() {
      console.log('sidebar cleanin up')
    }
  }, [dispatch])

  const dispatchViewGroupTask = (group: Group) => {
    // TODO
  };

  const dispatchCancelTask = () => {
    props.dispatch(cancelTask());
  }
  
  return (
    <Spin spinning={isLoading}>
      <Sider width={200} style={{ height: '100vh', background: '#fff' }}>
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
            {props.state.sidebar?.groups?.map((group: Group) => 
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
            {props.state.sidebar?.users?.map((user: User) => {
              const name = `${user.firstName}.${user.lastName}`;
              return <Menu.Item key={name}>{name}</Menu.Item>
            })}
          </SubMenu>

        </Menu>
      </Sider>
    </Spin>
  );
}
 
export default withAppContext(SideBar);