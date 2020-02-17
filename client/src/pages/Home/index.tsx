import React from 'react';
import { Layout, PageHeader, Icon, Menu } from 'antd';
import { Sidebar } from '../../components/common';
import "antd/dist/antd.css";
import { AppConsumer } from '../../context';
import * as Tasks from '../../components/Tasks';

const { Content, Header } = Layout;

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
      <Layout style={{ paddingTop: '12px', paddingLeft: '12px', overflow: 'hidden' }}>
        <Content  
          style={{
            background: '#fff',
            overflow: 'scroll',
            height: '100vh',
          }}
        >
          <View />
        </Content>
      </Layout>
    )
  };

  return (
    <Layout>
      <Sidebar />
      <Presentation />
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