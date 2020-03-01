import React, { useState, useEffect } from 'react';
import { Select, notification, Spin } from 'antd';
import axios from '../../../config/axios';

const { Option } = Select;

interface SelectorProps {
  updateFormItem: Function,
  getFormItem: Function,
  formId: string,
  className: string
};

const Selector: React.FunctionComponent<SelectorProps> = ({ getFormItem, updateFormItem, formId, className }) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log('Selector data');
  console.dir(data)

  useEffect(() => {
    async function getInstances() {
      try {
        const payload = {
          className,
          page: 0,
          pageSize: 100
        }
        setIsLoading(true);
        let { data } = await axios.post(`/mira/getInstances`, payload);
        let instances: any[] = data.instances;
        console.log(data.instances[0])
        notification.info({message: `Selector data - ${JSON.stringify(instances)}`});
        setData([...instances]);
        setIsLoading(false);
      }
      catch (err) {
        notification.error({message: `Unable to get your data - ${err.message}`});
        setIsLoading(false);
      }
    };
    getInstances();

    return () => {}
  }, [className]);

  const selectAndUpdateForm = (selectedItems: any) => {
    const selectedValue = selectedItems[0];
    console.log('you have selected this value from Selector');
    console.dir(selectedValue);
    const instance = data.find(item => item.id === selectedValue);
    console.log('setting context instance to');
    console.dir(instance);

    const currentSelections = getFormItem(formId);
    if (! currentSelections) {
      updateFormItem({ [formId]: [instance]})
    }
    else {
      updateFormItem({ [formId]: [...currentSelections, instance]})
    }
  }

  const options = data?.map((child: any) => 
    <Option key={child.id}>
      {child.id} {child.className}
    </Option>)

  return (
    <Spin spinning={isLoading}>
      <Select
        mode="multiple"
        size={'large'}
        style={{ width: '100%' }}
        onChange={(instance) => selectAndUpdateForm(instance)}
      >
        {options}
      </Select>
    </Spin>
  )
}

export default Selector;