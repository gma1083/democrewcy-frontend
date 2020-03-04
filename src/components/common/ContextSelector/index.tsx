import React, { FormEvent } from 'react';
import { PageHeader, Form, message } from 'antd';
import { TaskType } from '../../../config/types';
import { Selector, Actions } from '..';
import { cancelTask, setTaskContext, asyncRequest } from '../../../context/actions';

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
      console.log('context')
      console.dir(context);
      console.dir(context[0])
      let ctx = context[0];

      if (!err) {
        try {
          let options = {
            method: 'get',
            url: `/mira/${this.props.ctxType}`,
            data: {}
          };
          const classProps: any = await asyncRequest(options, this.props.dispatch);
          console.log('classProps');
          console.dir(classProps)
          const relationshipsSetToTrue = classProps.data.relationships?.reduce((total: any, rel: any) => {
            return { ...total, [rel.name]: true }
          }, {});
          console.dir('relationships')
          console.dir(relationshipsSetToTrue)
          options = {
            method: 'post',
            url: '/mira/get',
            data: { 
              className: this.props.ctxType,
              id: ctx.id,
              ...relationshipsSetToTrue
            } 
          }
          console.log('options for populated req');
          console.dir(options);
          const instance = await asyncRequest(options, this.props.dispatch)
          console.log('new instance! populated?')
          console.dir(instance);
          // todo set instance
        }
        catch (err) {
          // currently doesn't work but still sets the active ctx here. will fix when above is fixed
          this.props.dispatch(setTaskContext(ctx));
          message.success(`thanks for selecting ${JSON.stringify(context)}`);
        }
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

          <Form.Item label={`${props.ctxType}s`}>
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
 