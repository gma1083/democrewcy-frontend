import React from 'react';
import SequenceTask from '../../common/SequenceTask';
import tasks from './tasks';

 
interface SequenceTaskExampleProps {
};

const SequenceTaskExample: React.SFC<SequenceTaskExampleProps> = () => {

  const submit = (data: any) => alert('yo');

  return (
    <SequenceTask tasks={tasks}/>
  );
}
 
export default SequenceTaskExample;