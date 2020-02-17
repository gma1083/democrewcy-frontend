import * as React from 'react';
import { PageHeader, Layout, Button } from 'antd';
import "antd/dist/antd.css";
const { Content, Footer } = Layout;

type TaskType = 'view' | 'edit' | 'create';

export interface TaskProps {
  title: string,
  subTitle?: string,
  children: any,
  onSubmit: Function,
  type: TaskType
};
 
const Task: React.SFC<TaskProps> = ({ title, subTitle = '', children, onSubmit, type }) => {
  const Actions = () => 
    type === 'view' ?
      <Footer>
        <Button size='large' type='primary' shape='round' onClick={() => onSubmit()}>
          Done
        </Button>
      </Footer> :
      type === 'edit' || type === 'create' ?
        <Footer>
          <Button 
            size='large' 
            type='primary' 
            shape='round' 
            style={{marginRight: '10px'}}
            onClick={() => onSubmit()}
          >
            Submit
          </Button>
          <Button size='large' type='ghost' shape='round'>
            Cancel
          </Button>
        </Footer> :
        <Footer />

  return ( 
    <Layout style={{ minHeight: '100%' }}>
        <Content  
          style={{
            background: '#fff',
            height: '90vh',
            overflow: 'scroll'
          }}
        >
          <PageHeader title={title} subTitle={subTitle} />
          <div style={{padding: '10px'}}>
            {children}
          </div>
        </Content>
        <Actions />
      </Layout>
  );
}
 
export default Task;