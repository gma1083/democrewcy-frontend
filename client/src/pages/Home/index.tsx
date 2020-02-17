import React from 'react';
import { Layout, PageHeader } from 'antd';
import { Sidebar } from '../../components/common';
import "antd/dist/antd.css";
import { AppConsumer } from '../../context';
import * as Tasks from '../../components/Tasks';
import { Context } from '../../config/types';

const { Content } = Layout;

export interface HomeProps {

};

export interface HomePresentationProps {
  state: Context
}
 
const HomePresentation: React.SFC<HomePresentationProps> = (props) => {
  console.log('props in HomePresentation')
  console.log(props)
  
  const { state } = props;

  const HomeView = () => {
    return <PageHeader title='Welcome to Democrewcy' />
  };
  
  const Presentation = () => {
    let View: React.SFC<any> = state.runningTask && state.activeTask ? (Tasks as any)[state.activeTask.component] : HomeView;
    
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
      {(ctx: any) => <HomePresentation {...ctx} {...props} />}
    </AppConsumer>
  );
}
 
export default Home;