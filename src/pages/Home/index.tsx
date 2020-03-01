import React from 'react';
import { Layout } from 'antd';
import { SideBar } from '../../components/common';
import * as Tasks from '../../components/tasks';
import "antd/dist/antd.css";
import { withAppContext } from '../../context';
import { Context } from '../../config/types';
import { Redirect } from 'react-router-dom';

export interface HomeProps {

};

export interface HomeProps {
  state: Context
}
 
const Home = (props: any) => (
    <Layout>
      {props.state.activeTask && <Redirect to={`/tasks`} />}
      <SideBar />
      <div style={{height: '100vh', width: '100vw' }}>
        <Tasks.ViewDashboard {...props}/>
      </div>
    </Layout>
  )
 

 
export default withAppContext(Home);