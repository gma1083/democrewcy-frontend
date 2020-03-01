import React from 'react';
import SequenceTask from '../../common/SequenceTask';
import * as tasks from './tasks';
 
interface SequenceTaskExampleProps {
};

const SequenceTaskExample: React.SFC<SequenceTaskExampleProps> = () => {


  return (
    <SequenceTask tasks={tasks}/>
  );
}
 
export default SequenceTaskExample;