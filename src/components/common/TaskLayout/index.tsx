import * as React from 'react';
import { PageHeader, Layout } from 'antd';
import "antd/dist/antd.css";
const { Content } = Layout;

export interface TaskLayoutProps {
  title: string,
  subTitle?: string,
  form: React.ReactNode,
};
 
const TaskLayout: React.FunctionComponent<TaskLayoutProps> = ({ 
  title, 
  subTitle = '', 
  form, 
}) => {
  return ( 
      <Layout>
        <Content  
          style={{
            background: '#fff',
            height: '100%',
            overflow: 'scroll'
          }}
        >
          <PageHeader title={title} subTitle={subTitle} />
          <div style={{padding: '10px'}}>
            {form}
          </div>
        </Content>
      </Layout>
  );
}

export default TaskLayout;