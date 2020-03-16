import React, { FormEvent } from 'react';
import { Form, message } from 'antd';
import { TaskType, TaskTab } from '../../../config/types';
import { Selector, Actions } from '..';
import { closeTask, setTaskContextId } from '../../../context/actions';
import { FormComponentProps } from "antd/lib/form/Form";

export interface ContextSelectorProps extends FormComponentProps {
  dispatch: Function,
  task: TaskTab
}
 
class ContextSelector extends React.Component<ContextSelectorProps> {
  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.dir(this.props)
    this.props.form.validateFieldsAndScroll((err: Error, values: any) => {
      if (!err) {
        const { context } = values;
        const ctx = context[0].id;
        this.props.dispatch(setTaskContextId(this.props.task.key, ctx));
        message.success(`thanks for selecting ${JSON.stringify(ctx)}`);
      } else {
        message.error(`you didn't select your ctx`);
      }
    });
  };

  cancel = () => {
    this.props.dispatch(closeTask(this.props.task.key));
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
      taskType: 'edit' as TaskType,
      submitAction: this.handleSubmit,
      cancelAction: this.cancel
    };
  
    return ( 
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>

          <Form.Item label={`${props.task.context.type}s`}>
            {getFieldDecorator('context', {
              rules: [{ required: true, message: 'try it out also' }],
            })(
              <>
                <Selector 
                  className={props.task.context.type}
                  formItemId="context"
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
 