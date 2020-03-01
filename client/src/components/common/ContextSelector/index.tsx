import React, { FormEvent } from 'react';
import {  Typography, Form, message } from 'antd';
import {  TaskType } from '../../../config/types';
import { Selector, Actions } from '..';
import { cancelTask, setTaskContext } from '../../../context/actions';

export interface ContextSelectorProps {
  form: any,
  dispatch: Function,
  ctxType: string,
  type: string
}
 
class ContextSelector extends React.Component<ContextSelectorProps> {

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err: Error, values: any) => {

      const { context } = values;
      console.log('we have selected the context for task')
      console.dir(context[0])
      let ctx = context[0];

      if (!err) {
        this.props.dispatch(setTaskContext(ctx));
        message.success(`thanks for selecting ${JSON.stringify(context)}`);
      } else {
        message.error(`you didn't select your ctx`);
      }
    });
  };

  cancel = () => {
    this.props.dispatch(cancelTask())
  }

  render() { 

    const { props } = this;
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

          <Form.Item>
            <Typography.Title>
              Select a {props.ctxType}
            </Typography.Title>
          </Form.Item>
          

          <Form.Item>
            {getFieldDecorator('context', {
              rules: [{ required: true, message: 'try it out also' }],
            })(
              <>
                <Selector 
                  className={props.ctxType}
                  formId="context"
                  updateFormItem={this.props.form.setFieldsValue}
                  getFormItem={this.props.form.getFieldValue}
                />
              </>
            )}
          </Form.Item>

          <Actions {...actions} />

        </Form>
     );
  }
}

export default Form.create()(ContextSelector);
 