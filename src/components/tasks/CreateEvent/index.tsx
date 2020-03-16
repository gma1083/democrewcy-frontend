import React, { FormEvent } from 'react';
import {
  Form,
  Input,
  TimePicker,
  DatePicker,
  message
} from 'antd';
import { Selector } from '../../common';
import { asyncRequest, closeTask } from '../../../context/actions';
import { TaskType, TaskTab } from '../../../config/types';
import { Actions } from '../../../components/common';
import { createEvent } from '../../../config/requests';
import { FormComponentProps, GetFieldDecoratorOptions } from "antd/lib/form/Form";
const { TextArea } = Input;

const onChange = (e: any) => {
  console.log(e);
};

interface CreateEventProps extends FormComponentProps {
  dispatch: Function,
  task: TaskTab
}

class CreateEvent extends React.Component<CreateEventProps> {

  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err: Error, values: any) => {
      if (!err) {
        let { name, description, startTime, endTime, startDate, endDate, group } = values;
        group = group[0].id;
        let event = { name, description, startTime, endTime, startDate, endDate, group };
        const doc = await asyncRequest(createEvent(event));
        if (doc) {
          message.success(`response: ${JSON.stringify(doc, null, 2)}`);
        } else {
          message.error(`response: ${JSON.stringify(doc, null, 2)}`);
        }
      }
    });
  };

  cancel = () => {
    this.props.dispatch(closeTask(this.props.task.key));
  };

  handleConfirmBlur = (e: any) => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  render() {
    console.log('[CreateEvent] props')
    console.log(this.props);

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

    const config: GetFieldDecoratorOptions = {
      rules: [{ type: 'object', required: true, message: 'Please select a time.' }],
    };

    const actions = {
      taskType: this.props.task.taskType as TaskType,
      submitAction: this.handleSubmit,
      cancelAction: this.cancel
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>

        <Form.Item label="Name">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'It\'s required bro.' }],
          })(
            <Input placeholder="" allowClear onChange={onChange} />
          )}
        </Form.Item>

        <Form.Item label="Description">
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'It\'s required bro.' }],
          })(
            <TextArea 
              placeholder="" 
              allowClear 
              onChange={onChange} 
              autoSize={{ minRows: 10, maxRows: 20 }}
            />
          )}
        </Form.Item>

        <Form.Item label="Start Date">
          {getFieldDecorator('startDate', config)(<DatePicker />)}
        </Form.Item>

        <Form.Item label="Start Time">
          {getFieldDecorator('startTime', config)(<TimePicker />)}
        </Form.Item>

        <Form.Item label="End Date">
          {getFieldDecorator('endDate', config)(<DatePicker />)}
        </Form.Item>

        <Form.Item label="End Time">
          {getFieldDecorator('endTime', config)(<TimePicker />)}
        </Form.Item>

        <Form.Item label="Group">
        {getFieldDecorator('group', {
            rules: [{ required: true, message: 'It\'s required bro.' }],
          })(
            <Selector
              className="Group"
              formItemId='group'
              updateFormItem={this.props.form.setFieldsValue}
              getFormItem={this.props.form.getFieldValue}
            />
          )}
        </Form.Item>

        <Actions {...actions} />

      </Form>
    );
  }
}

export default Form.create()(CreateEvent);