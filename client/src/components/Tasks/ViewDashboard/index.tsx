import * as React from 'react';
import { Task, RelatedAction } from '../../common';
import { Layout } from 'antd';
const { Content } = Layout;

export interface ViewDashboardProps {
  
}
 
const ViewDashboard: React.SFC<ViewDashboardProps> = (props:any) => {
  console.log('props in ViewDashboard')
  console.dir(props)
  return ( 
    <Task 
        title={'Welcome to Democrewcy'} 
        type='view'
        submitAction={(f: any)=>f}
        continueAction={(f: any)=>f}
        goBackAction={(f: any)=>f}
        cancelAction={(f: any)=>f}
        disallowActions={true}
      >
        <Content>
          <RelatedAction />
        </Content>
      </Task>
   );
}
 
export default ViewDashboard;