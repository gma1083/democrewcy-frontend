import React, { FormEvent } from 'react';
import {
  Form,
  Input,
  DatePicker,
  message
} from 'antd';
import Actions from '../../common/Actions';
import { cancelTask } from '../../../context/actions';
import { asyncRequest } from '../../../context/actions';
import { TaskType } from '../../../config/types';

interface CreateAccountFormProps {
  form: any,
  state: any,
  dispatch: Function
  type: TaskType
}

// Most of this class is boilerplate from ant design. What we care about are 
// handleSubmit() and cancel(). We'll do our async requests/dispatch in submit
// or we cancel the task by rerouting the user back to the home page.
class CreateAccountForm extends React.Component<CreateAccountFormProps> {

  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  /* 
    We care about this!
  */
  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err: Error, values: any) => {
      const { firstName, lastName, email, password, birthDate } = values;
      const options = {
        method: 'post',
        url: '/createAccount',
        data: { 
          className: 'User',
          firstName, 
          lastName, 
          email, 
          password, 
          birthDate
        } 
      };

      console.log('>> req to create -- User');
      console.log(options);

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

  /* 
    And this!
  */
  cancel = () => {
    this.props.dispatch(cancelTask())
  };
  
  compareToFirstPassword = (rule: any, value: any, callback: any) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule: any, value: any, callback: any) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleConfirmBlur = (e: any) => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  render() {

    const { type } = this.props;
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

    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select a time.' }],
    };


    /* 
      We define an object for our actions component. It contains the task type,
      which tells the Action component to render the footer or not, and then we
      pass 2 of the option 4 action methods. This causes the Actions component to only 
      render those actions we defined.
    */
    const actions = {
      taskType: type as TaskType,
      submitAction: this.handleSubmit,
      cancelAction: this.cancel
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>

        <Form.Item label="First Name">
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: 'Please enter a name' }],
          })(
            <Input placeholder="" allowClear />
          )}
        </Form.Item>

        <Form.Item label="Last Name">
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: 'Please enter a name'  }],
          })(
            <Input placeholder="" allowClear />
          )}
        </Form.Item>

        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid email',
              },
              {
                required: true,
                message: 'Please input an email',
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input a password',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>

        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>

        <Form.Item label="Birthday">
          {getFieldDecorator('birthDate', config)(<DatePicker />)}
        </Form.Item>

        <Actions {...actions} />

      </Form>
    );
  }
}

export default Form.create()(CreateAccountForm);