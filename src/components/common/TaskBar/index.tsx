import * as React from 'react';
import './index.css';
import { Icon, Input, AutoComplete } from 'antd';
import { NavLink } from 'react-router-dom';
import { tasks } from '../../../config/tasks';
import { SelectValue } from 'antd/lib/select';
import { Task } from '../../../config/types';

const { Option, OptGroup } = AutoComplete;

const dataSource = [
  {
    title: 'Tasks',
    children: tasks
  }
];

const renderTitle = (title: string) => <span>{title}</span>;
const options = dataSource
  .map(group => (
    <OptGroup key={group.title} label={renderTitle(group.title)}>
      {group.children.map((opt) => (
        <Option key={opt.key} value={opt.title}>
          {opt.title}
        </Option>
      ))}
    </OptGroup>
  ))
  .concat([
    <Option disabled key="all" className="show-all">
      <NavLink key='/' to='/'>
        View all tasks
      </NavLink>
    </Option>,
  ]);


interface TaskBarProps {
  tasks: Task[],
  dispatchTask: Function, 
};

/*

  TODO

  use context, update interface props to state and dispatch
  use tasks from context as data source

*/

const TaskBar: React.SFC<TaskBarProps> = ({ tasks, dispatchTask,  }) => {

  console.log('tasks in taskbar');
  console.log(tasks);    

  return (
    <div className="certain-category-search-wrapper" style={{ padding: '0 10px' }}>
      <AutoComplete
        className="certain-category-search"
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={false}
        size="large"
        dataSource={options}
        placeholder="Take Action"
        optionLabelProp="value"
        onSelect={(opt: SelectValue) => dispatchTask(tasks.find((task: Task) => task.title === opt))}
      >
        <Input suffix={<Icon type="search" className="certain-category-icon" />} />
      </AutoComplete>
    </div>
  );
}

export default TaskBar;