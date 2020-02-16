import React from 'react';
import { Layout, Breadcrumb, PageHeader } from 'antd';
import { Sidebar, NavigationBar } from '../../components/common';
import "antd/dist/antd.css";

const { Content } = Layout;

export interface HomeProps {
  
};
 
const Home: React.SFC<HomeProps> = (props) => {
  const Breadcrumbs = (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
  const MainContent = (
    <Content  
      style={{
        background: '#fff',
        minHeight: '100vh',
      }}
    >
      <PageHeader 
        onBack={() => alert('woah')}
        title='Home' 
      />
    </Content>
  );

  console.log('props in home')
  console.log(props)

  return (
    <Layout>
      <NavigationBar />
      <Layout>
        <Sidebar />
        <Layout style={{ padding: '0 24px 24px' }}>
          {Breadcrumbs}
          {MainContent}
        </Layout>
      </Layout>
    </Layout>
  );
}
 
export default Home;