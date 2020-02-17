import React, { useState, useEffect } from 'react';
import { Layout, PageHeader } from 'antd';
import { Sidebar } from '../../components/common';
import "antd/dist/antd.css";
import { AppConsumer } from '../../context';
import * as Tasks from '../../components/Tasks';

const { Content } = Layout;

export interface HomeProps {

};

export interface HomePresentationProps {
  state: any
}
 
const HomePresentation: React.SFC<HomePresentationProps> = ({ state }) => {
  console.log('state in HomePresentation')
  console.log(state)

  const HomeView = () => {
    return <PageHeader title='Welcome to Democrewcy' />
  };
  
  const Presentation = () => {
    let View: any = state.runningTask ? (Tasks as any)[state.activeTask.component] : HomeView;
    return (
      <Layout style={{ padding: '0 12px 12px' }}>
        <Content  
          style={{
            background: '#fff',
            minHeight: '100vh',
          }}
        >
          <View />
        </Content>
      </Layout>
    )
  };

  return (
    <Layout>
      <Layout>
        <Sidebar />
        <Presentation />
      </Layout>
    </Layout>
  );
}
 
const Home: React.SFC<HomeProps> = (props: any) => {  
  console.log('props in Home')
  console.log(props)

  return (
    <AppConsumer>
      {(ctx: any) => <HomePresentation {...ctx} />}
    </AppConsumer>
  );
}
 
export default Home;