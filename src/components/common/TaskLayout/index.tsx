import * as React from 'react';
import { PageHeader, Layout } from 'antd';
import "antd/dist/antd.css";
const { Content } = Layout;

export interface TaskLayoutProps {
  title: string,
  subTitle?: string,
  task: React.ReactNode,
};
 
const TaskLayout: React.FunctionComponent<TaskLayoutProps> = ({ 
  title, 
  subTitle = '', 
  task, 
}) => {
  return ( 
      <Layout>
        <Content  
          style={{
            background: '#fff',
            height: '100vh',
            overflow: 'scroll'
          }}
        >
          <PageHeader title={title} subTitle={subTitle} />
          <div style={{ height: '100%'}}>
            {task}
          </div>
        </Content>
      </Layout>
  );
}

export default TaskLayout;