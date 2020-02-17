import * as React from 'react';
import { PageHeader, Layout, Button } from 'antd';
import "antd/dist/antd.css";
const { Content, Footer } = Layout;

export interface TaskProps {
  title: string,
  children: any
};
 
const Task: React.SFC<TaskProps> = ({ title, children }) => {
  return ( 
    <Layout 
      style={{ 
        padding: '0 12px 12px',
        minHeight: '100vh',
    }}>
        <Content  
          style={{
            background: '#fff',
          }}
        >
          <PageHeader title={title} />
          {children}
        </Content>
        <Footer>
          <Button size='large' type='primary' shape='round' style={{marginRight: '10px'}}>
            Submit
          </Button>
          <Button size='large' type='ghost' shape='round'>
            Cancel
          </Button>
        </Footer>
      </Layout>
  );
}
 
export default Task;