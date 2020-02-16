import React from 'react';
import { Layout, PageHeader } from 'antd';
import { Sidebar, NavigationBar } from '../../components/common';
import { Events, Members, Motions } from '../../components';
import "antd/dist/antd.css";
import { AppConsumer } from '../../context';

const { Content } = Layout;

export interface HomeProps {

};
 
const HomePresentation: React.SFC<HomeProps> = (props: any) => {

  const { state } = props;

  console.log('props in home')
  console.log(props)

  return (
    <Layout>
      {/* <NavigationBar /> */}
      <Layout>
        <Sidebar groups={state.groups} users={state.users} />
        <Layout style={{ padding: '0 12px 12px' }}>
          <Content  
            style={{
              background: '#fff',
              minHeight: '100vh',
            }}
          >
            <PageHeader title='View Group' />
            <Members members={state.members} />
            <Events events={state.events} />
            <Motions motions={state.motions} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

const Home: React.SFC<{}> = (props: any) => {
  return (
    <AppConsumer>
      {ctx => <HomePresentation {...ctx} {...props}/>}
    </AppConsumer>
  )
} 
 
export default Home;