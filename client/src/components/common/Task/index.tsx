import * as React from 'react';
import { PageHeader, Layout, Button } from 'antd';
import "antd/dist/antd.css";
const { Content, Footer } = Layout;

type TaskType = 'view' | 'edit' | 'create';

export interface TaskProps {
  title: string,
  subTitle?: string,
  children: any,
  type: TaskType
  disallowActions?: boolean,
  continueAction: Function,
  goBackAction: Function,
  submitAction: Function,
  cancelAction: Function,
};
 
const Task: React.SFC<TaskProps> = ({ 
  title, 
  subTitle = '', 
  children, 
  continueAction, 
  goBackAction, 
  submitAction, 
  cancelAction,
  type, 
  disallowActions
}) => {
  const Actions = () => 
      type === 'edit' || type === 'create' ?
        <Footer>
          <Button 
            size='large' 
            type='primary' 
            shape='round' 
            style={{marginRight: '10px'}}
            onClick={() => submitAction()}
          >
            Submit
          </Button>
          <Button 
            size='large' 
            type='primary' 
            shape='round' 
            style={{marginRight: '10px'}}
            onClick={() => continueAction()}
          >
            Continue
          </Button>
          <Button 
            size='large' 
            type='ghost' 
            shape='round'
            style={{marginRight: '10px'}}
            onClick={() => goBackAction()}
          >
            Go Back
          </Button>
          <Button 
            size='large' 
            type='ghost' 
            shape='round'
            onClick={() => cancelAction()}
          >
            Cancel
          </Button>
        </Footer> :
        <Footer />

  return ( 
      <Layout>
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
        {! disallowActions && <Actions />}
      </Layout>
  );
}
 
export default Task;