import React, { FormEvent } from 'react';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  TimePicker,
  DatePicker,
  AutoComplete,
  Icon,
  Checkbox, Col, Row, Radio, message, notification
} from 'antd';
import { asyncRequest, cancelTask } from '../../../context/actions';
import { Actions, Selector } from '../../common/';
import { TaskType } from '../../../config/types';

const { TextArea } = Input;

const onChange = (e: any) => {
  console.log(e);
};

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

interface CreateMotionFormProps {
  form: any,
  submitTask: Function
  state: any,
  dispatch: Function,
  type: TaskType
}

class CreateMotionForm extends React.Component<CreateMotionFormProps> {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err: Error, values: any) => {
      if (!err) {
        // TODO: get proposedBy from user.positionInGroup?
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

  handleConfirmBlur = (e: any) => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
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

  handleWebsiteChange = (value: any) => {
    let autoCompleteResult: any[];
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    console.dir(this.props)
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

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

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
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
            <Selector />
          )}
        </Form.Item>

        <Form.Item label="Poop Test">
          <Checkbox onClick={() => this.props.form.setFieldsValue({group: 'poop'})}/>
        </Form.Item>
        
        <Form.Item label='Allowed Vote Options'>
          <Selector />
        </Form.Item>
        
        <Actions {...actions} />

      </Form>
    );
  }
}

export default Form.create()(CreateMotionForm);