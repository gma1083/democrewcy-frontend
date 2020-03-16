import * as React from 'react';
import './index.css';
import { Icon, Input, AutoComplete } from 'antd';
import { NavLink } from 'react-router-dom';
import { tasks } from '../../../config/tasks';
import { SelectValue } from 'antd/lib/select';
import { TaskDefinitions, Task } from '../../../config/types';

const { Option, OptGroup } = AutoComplete;

const dataSource = [
  {
    title: 'Tasks',
    children: Object.keys(tasks).map((task: any) => tasks[task])
  }
];

const renderTitle = (title: string) => <span>{title}</span>;
// <Option value={task.key} /> -- this is passed to onClick
const options = dataSource
  .map(group => (
    <OptGroup key={group.title} label={renderTitle(group.title)}>
      {group.children.map((task: Task) => (
        <Option key={task.title} value={task.title}>
          {task.title}
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
  taskDefinitions: TaskDefinitions,
  openNewTask: Function, 
};


const TaskBar: React.FunctionComponent<TaskBarProps> = ({ taskDefinitions, openNewTask }) =>{

  const onSelect = (value: SelectValue, option: Object) => {
    openNewTask(taskDefinitions[value as string])
  }

  return <div className="certain-category-search-wrapper" style={{ padding: '0 10px' }}>
    <AutoComplete
      className="certain-category-search"
      dropdownClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={false}
      size="large"
      dataSource={options}
      placeholder="Take Action"
      optionLabelProp="value"
      onSelect={onSelect}
    >
      <Input suffix={<Icon type="search" className="certain-category-icon" />} />
    </AutoComplete>
  </div>
}
export default TaskBar;