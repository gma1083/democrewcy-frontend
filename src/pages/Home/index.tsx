import React from 'react';
import { Layout } from 'antd';
import { SideBar } from '../../components/common';
import * as Tasks from '../../components/tasks';
import "antd/dist/antd.css";
import { AppConsumer } from '../../context';
import { Context } from '../../config/types';
import { Redirect } from 'react-router-dom';

export interface HomeProps {

};

export interface HomePresentationProps {
  state: Context
}
 
const HomePresentation = (props: any) => (
    <Layout>
      {props.state.activeTask && <Redirect to={`/tasks`} />}
      <SideBar />
      <div style={{height: '100vh', width: '100vw' }}>
        <Tasks.ViewDashboard {...props}/>
      </div>
    </Layout>
  )
 
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