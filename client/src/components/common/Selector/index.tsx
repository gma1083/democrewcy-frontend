import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

let children: any[] = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value: any) {
  console.log(`Selected: ${value}`);
}

export default class Selector extends React.Component<{}> {
  render() {
    return (
      <div>
        <Select
          mode="multiple"
          size={'large'}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
          style={{ width: '100%' }}
        >
          {children}
        </Select>
      </div>
    );
  }
}