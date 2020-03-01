import * as React from 'react';
import { Layout, Button } from 'antd';
const { Footer } = Layout;

type TaskType = 'view' | 'edit' | 'create';

interface ActionsProps {
  taskType: TaskType,
  submitAction?: (e: React.FormEvent<Element>) => void,
  goBackAction?: () => void,
  cancelAction?: () => void,
  continueAction?: () => void,
};

const doNothing = () => {};

// If the task is 'edit' or 'create' the user has the option to show all buttons.
// If an action is not defined then doNothing is it's action, and if that is the case
// we do not render the button. Therefore only user defined actions will show.
// If the task is 'view' we do not show anything.
const Actions: React.FunctionComponent<ActionsProps> = ({ 
  taskType, 
  submitAction = doNothing,
  cancelAction = doNothing, 
  continueAction = doNothing,
  goBackAction = doNothing
}) => 
  taskType === 'edit' || taskType === 'create' ?
    <Footer style={{bottom: 0, position: 'absolute', width: '100vw'}}>
      {submitAction !== doNothing &&
        <Button 
          size='large' 
          type='primary' 
          shape='round' 
          style={{marginRight: '10px'}}
          htmlType="submit"
          onClick={(e) => submitAction(e)}
        >
          Submit
        </Button>}
      {continueAction !== doNothing &&
        <Button 
          size='large' 
          type='primary' 
          shape='round' 
          style={{marginRight: '10px'}}
          onClick={() => continueAction()}
        >
          Continue
        </Button>}
      {goBackAction !== doNothing &&
        <Button 
          size='large' 
          type='ghost' 
          shape='round'
          style={{marginRight: '10px'}}
          onClick={() => goBackAction()}
        >
          Go Back
        </Button>}
      {cancelAction !== doNothing &&
        <Button 
          size='large' 
          type='ghost' 
          shape='round'
          onClick={() => cancelAction()}
        >
          Cancel
        </Button>}
    </Footer> :
    <Footer />

export default Actions;