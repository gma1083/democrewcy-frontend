import React, { FormEvent } from 'react';
import {
  Form,
  Input,
  Checkbox, Col, Row,
} from 'antd';
import Selector from './selector';
const { TextArea } = Input;

const onChange = (e: any) => {
  console.log(e);
};


interface CreateGroupFormProps {
  form: any,
  submitTask: Function
}

class CreateGroupForm extends React.Component<CreateGroupFormProps> {
  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err: Error, values: any) => {
      if (!err) {
        alert(`${values}`);
      }
    });
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


    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>

        <Form.Item label="Name">
          {getFieldDecorator('clear-input', {
            rules: [{ required: true, message: 'try it out' }],
          })(
            <Input placeholder="What is this group called?" allowClear onChange={onChange} />
          )}
        </Form.Item>

        <Form.Item label="Description">
          {getFieldDecorator('clear-text', {
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
          {getFieldDecorator('checkbox-group', {
            initialValue: ['Ass', 'Butt', 'Cunt', 'Dick', 'Ejaculator', 'Fucker'],
          })(
            <Checkbox.Group style={{ width: '100%' }}>
              <Row>
                <Col span={8}>
                  <Checkbox value="Ass">
                    Ass
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Butt">
                    Butt
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Cunt">
                    Cunt
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Dick">
                    Dick
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Ejaculator">
                    Ejaculator
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Fucker">
                    Fucker
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          )}
        </Form.Item>
        <Form.Item label="Users">
          <Selector/>
        </Form.Item>
        <Form.Item label="Sub Groups">
          <Selector/>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'create-group' })(CreateGroupForm);