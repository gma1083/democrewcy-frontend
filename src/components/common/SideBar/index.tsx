import React, { useState, useEffect } from 'react';
import { Layout, Menu, Icon, Typography, Spin } from 'antd';
import "antd/dist/antd.css";
import { NavLink } from 'react-router-dom';
import { TaskBar } from '../index';
import { withAppContext } from '../../../context';
import { asyncRequest, openTask, openTaskWithInstanceId } from '../../../context/actions';
import { Context, Group, Task, User } from '../../../config/types';
import { getUserWithPositionsPopulated, getUsers } from '../../../config/requests';

const { SubMenu } = Menu;
const { Sider } = Layout;

export interface SideBarProps {
  state: Context,
  dispatch: Function
}

const SideBar: React.FunctionComponent<SideBarProps> = (props) => {

  const [isLoading, setLoading] = useState<boolean>(false);
  const [groups, setGroups] = useState<Group[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const { dispatch } = props;

  useEffect(() => {
    async function onMount() {
      setLoading(true);
      if (props.state.user) {
        let userResponse = await asyncRequest(getUserWithPositionsPopulated(props.state.user));
        let groups: any[] = userResponse?.data.positions.map((pos: any) => pos.group);
        let usersResponse = await asyncRequest(getUsers())
        let users: any[] = usersResponse?.data.instances;
        setUsers(users);
        setGroups(groups);
      } 
      setLoading(false);
    }
    onMount();

    return function onDismount() {
      console.log('sidebar cleanin up')
    }
  }, [dispatch, props.state.user])

  const dispatchViewGroupTask = (group: Group) => {
    // TODO
    console.dir(group)
    props.dispatch(openTaskWithInstanceId(props.state.taskDefinitions['View a Group'], group.id));
  };
  
  return (
    <Spin spinning={isLoading}>
      <Sider width={200} style={{ height: '100vh', background: '#fff', overflow: 'scroll' }}>
        <div style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '10px'}}>
          <NavLink key='/home' to='/home'>
            <Typography.Title level={3}>
              Democrewcy
            </Typography.Title>
          </NavLink>
        </div>
        <TaskBar 
          taskDefinitions={props.state.taskDefinitions} 
          openNewTask={(task: Task) => props.dispatch(openTask(task))} 
        />
        <Menu
          mode="inline"
          defaultOpenKeys={['Groups', 'Direct Messages']}
          style={{ height: '100%', borderRight: 0 }}
        >

          <SubMenu
            key="Groups"
            title={<span><Icon type="user" />Groups</span>}
          >
            {groups?.map((group: Group) => 
              <Menu.Item 
                key={group.name} 
                onClick={() => dispatchViewGroupTask(group)}
              >
                {group.name}
              </Menu.Item>)}
          </SubMenu>

          <SubMenu
            key="Direct Messages"
            title={<span><Icon type="laptop" />Direct Messages</span>}
          >
            {users?.map((user: User) => {
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