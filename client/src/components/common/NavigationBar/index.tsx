import React from 'react';
import { Layout, Menu, Button } from 'antd';
import "antd/dist/antd.css";

const { Header } = Layout;

export interface NavigationBarProps {
  
}
 
const NavigationBar: React.SFC<NavigationBarProps> = () => {
  return (
    <Header style={{width: '100%'}}>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
   );
}
 
export default NavigationBar;