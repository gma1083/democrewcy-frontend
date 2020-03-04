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

      let { name, description, positions, users, subGroups } = values;

      positions = positions.reduce((acc: any[], cur: any) => [...acc, cur.id], []);
      users = users.reduce((acc: any[], cur: any) => [...acc, cur.id], []);
      subGroups = subGroups.reduce((acc: any[], cur: any) => [...acc, cur.id], []);

      // TODO: Switch to Greg's route
      const options = {
        method: 'post',
        url: '/mira/put',
        data: {
          className: 'Group',
          name,
          description,
          positions,
          users,
          subGroups
        }
      };
      
      console.log('>> req to create -- Group');
      console.dir(options);

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
    console.log('[CreateGroup] props')
    console.log(this.props)

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
            rules: [{ required: true, message: 'It\'s required, bro.' }],
          })(
            <Input placeholder="What is this group called?" allowClear />
          )}
        </Form.Item>

        <Form.Item label="Description">
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'It\'s required, bro.' }],
          })(
            <TextArea 
              placeholder="What is this groups purpose?" 
              allowClear 
              autoSize={{ minRows: 2, maxRows: 8 }}
            />
            )}
        </Form.Item> 
        
        <Form.Item label="Positions">
          {getFieldDecorator('positions', {
              rules: [{ required: true, message: 'It\'s required, bro.' }],
            })(
              <>
                <Selector 
                  className="Position"
                  formId='positions'
                  updateFormItem={this.props.form.setFieldsValue}
                  getFormItem={this.props.form.getFieldValue}
                  multiSelect={true}
                />
              </>
            )}
        </Form.Item>

        <Form.Item label="Users">
          {getFieldDecorator('users', {
              rules: [{ required: true, message: 'It\'s required, bro.' }],
            })(
            <>
              <Selector
                className="User"
                formId="users"
                updateFormItem={this.props.form.setFieldsValue}
                getFormItem={this.props.form.getFieldValue}
                multiSelect={true}
              />
            </>
          )}
        </Form.Item>

        <Form.Item label="Sub Groups">
          {getFieldDecorator('subGroups', {
              rules: [{ required: true, message: 'It\'s required, bro.' }],
            })(
            <>
              <Selector
                className="Group"
                formId="subGroups"
                updateFormItem={this.props.form.setFieldsValue}
                getFormItem={this.props.form.getFieldValue}
                multiSelect={true}
              />
            </>
          )}
        </Form.Item>

        <Actions {...actions} />

      </Form>
    );
  }
}

export default Form.create()(CreateGroupForm);