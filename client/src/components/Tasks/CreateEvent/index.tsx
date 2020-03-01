import React, { FormEvent } from 'react';
import {
  Form,
  Input,
  Select,
  TimePicker,
  DatePicker,
  AutoComplete,
  message,
  notification
} from 'antd';
import { Selector } from '../../common';
import { asyncRequest, cancelTask } from '../../../context/actions';
import { TaskType } from '../../../config/types';
import { Actions } from '../../../components/common';
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

interface CreateEventProps {
  form: any,
  submitTask: Function,
  dispatch: Function,
  type: TaskType
}

class CreateEvent extends React.Component<CreateEventProps> {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err: Error, values: any) => {
      const { name, description, startTime, endTime, startDate, endDate, group } = values;
      const options = {
        method: 'post',
        url: '/createEvent',
        data: {
          className: 'Event',
          name,
          description,
          startTime,
          endTime,
          group,
        }
      };
      message.info(`Create Event payload -- ${JSON.stringify(options)}`);
      if (!err) {
        console.log('request to create event')
        console.dir(options);
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
              formId='group'
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