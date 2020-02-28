import React, { FormEvent } from 'react';
import {
  Form,
  Input,
  message
} from 'antd';
import Selector from '../../common/Selector';
import { asyncRequest, cancelTask } from '../../../context/actions';
import Actions from '../../common/Actions';
import { TaskType } from '../../../config/types';
const { TextArea } = Input;

const onChange = (e: any) => {
  console.log(e);
};


interface CreateGroupFormProps {
  form: any,
  submitTask: Function,
  state: any,
  dispatch: Function,
  type: TaskType
}

class CreateGroupForm extends React.Component<CreateGroupFormProps> {
  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err: Error, values: any) => {
      // const { name, description, startTime, endTime, group } = values;
      const options = {
        method: 'post',
        url: '/createEvent',
        data: {
          className: 'Event'
          // name,
          // description,
          // startTime,
          // endTime,
          // group,
        }
      };
      if (!err) {
        const doc = await asyncRequest(options, this.props.dispatch);
        if (doc) {
          message.success(`response: ${JSON.stringify(doc, null, 2)}`);
        } else {
          message.error(`response: ${JSON.stringify(doc, null, 2)}`);
        }
      }
    });
  };

  cancel = () => {
    this.props.dispatch(cancelTask())
  };

  render() {
    console.dir(this.props)
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        md: { span: 4 },
        lg: { span: 4 },
      },
      wrapperCol: {
        md: { span: 8 },
        lg: { span: 8 },
      },
    };
  
    const actions = {
      taskType: this.props.type as TaskType,
      submitAction: this.handleSubmit,
      cancelAction: this.cancel
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>

        <Form.Item label="Name">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'try it out' }],
          })(
            <Input placeholder="What is this group called?" allowClear onChange={onChange} />
          )}
        </Form.Item>

        <Form.Item label="Description">
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'try it out also' }],
          })(
            <TextArea 
              placeholder="What is this groups purpose?" 
              allowClear 
              onChange={onChange} 
              autoSize={{ minRows: 2, maxRows: 8 }}
            />
            )}
        </Form.Item> 
        
        <Form.Item label="Positions">
          <Selector/>
        </Form.Item>

        <Form.Item label="Users">
          <Selector/>
        </Form.Item>

        <Form.Item label="Sub Groups">
          <Selector/>
        </Form.Item>

        <Actions {...actions} />

      </Form>
    );
  }
}

export default Form.create()(CreateGroupForm);