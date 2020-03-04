import React, { useState, useEffect } from 'react';
import { Select, notification, Spin } from 'antd';
import axios from '../../../config/axios';
import { ModeOption } from 'antd/lib/select';
const { Option } = Select;

interface SelectorProps {
  updateFormItem: Function,
  getFormItem: Function,
  formId: string,
  className: string,
  multiSelect?: boolean
};

const Selector: React.FunctionComponent<SelectorProps> = ({ 
  getFormItem, 
  updateFormItem, 
  formId, 
  className,
  multiSelect
}) => {
  
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
        setData([...instances]);
        setIsLoading(false);
      }
      catch (err) {
        notification.error({message: `Unable to get your data - ${err.message}`});
        setIsLoading(false);
      }
    };
    getInstances();

    return () => {
    }
  }, [className]);

  const selectAndUpdateForm = (selectedInstanceId: any) => {

    const instance = data.find(item => item.id === selectedInstanceId);

    const currentSelections = getFormItem(formId);

    if (! currentSelections) {
      updateFormItem({ [formId]: [instance]})
    }
    else {
      if (! multiSelect) {
        updateFormItem({ [formId]: [instance]})
      }
      else {
        updateFormItem({ [formId]: [...currentSelections, instance]})
      }
    }
  }

  // When we set key = child.id we will get this id
  // for free when we call onSelect or onDeselect
  const options = data?.map((child: any) => 
    <Option key={child.id}>
      {child.id} {child.className}
    </Option>)

  const mode: ModeOption = multiSelect ? 'multiple' as ModeOption : 'default' as ModeOption;
  
  return (
    <Spin spinning={isLoading}>
      <Select
        mode={mode}
        size={'large'}
        style={{ width: '100%' }}
        onSelect={(instanceId) => selectAndUpdateForm(instanceId)}
        onDeselect={(instanceId) => selectAndUpdateForm(instanceId)}
      >
        {options}
      </Select>
    </Spin>
  )
}


export default Selector;