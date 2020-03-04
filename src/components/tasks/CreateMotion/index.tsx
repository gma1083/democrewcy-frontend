import React, { FormEvent } from 'react';
import {
  Form,
  Input,
  message,
} from 'antd';
import { asyncRequest, cancelTask } from '../../../context/actions';
import { Actions, Selector } from '../../common/';
import { TaskType } from '../../../config/types';

const { TextArea } = Input;

const onChange = (e: any) => {
  console.log(e);
};

interface CreateMotionFormProps {
  form: any,
  submitTask: Function
  state: any,
  dispatch: Function,
  type: TaskType
}

class CreateMotionForm extends React.Component<CreateMotionFormProps> {

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err: Error, values: any) => {
      if (!err) {
        // TODO: get proposedBy from context user.positionInGroup?
        // TODO: get group and vote from local state
        // TODO: store group and vote in local state
        // const { title, description } = values;
        const options = {
          method: 'post',
          url: '/createMotion',
          data: {
            className: 'Motion'
            // title: String,
            // description: String,
            // proposedBy: id, // id of Position
            // group: id,  
            // vote: {
            //     className: String, // 'Vote'
            //     allowedVoteOptions: [id],
            // }
          }
        };
        const doc = await asyncRequest(options, this.props.dispatch);
        if (doc) {
          message.success(`response: ${JSON.stringify(doc, null, 2)}`);
        } else {
          message.error(`response: ${JSON.stringify(doc, null, 2)}`);
        }
      } else {
        message.error(`group: ${JSON.stringify(values, null, 2)}`);
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

        <Form.Item label="Title">
          {getFieldDecorator('title', {
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

        <Form.Item label="Group">
          {getFieldDecorator('group', {
            rules: [{ required: true, message: 'Please enter a name'  }],
          })(
            <Selector 
              formId="group"
              className="Group"
              updateFormItem={this.props.form.setFieldsValue}
              getFormItem={this.props.form.getFieldValue}
            />
          )}
        </Form.Item>
        
        <Form.Item label='Allowed Vote Options'>
          <Selector 
            className="User"
            formId="users"
            updateFormItem={this.props.form.setFieldsValue}
            getFormItem={this.props.form.getFieldValue}
            multiSelect={true}
          />
        </Form.Item>
        
        <Actions {...actions} />

      </Form>
    );
  }
}

export default Form.create()(CreateMotionForm);