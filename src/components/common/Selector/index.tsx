import React, { useState, useEffect } from 'react';
import { Select, notification, Spin } from 'antd';
import axios from '../../../config/axios';
import { ModeOption, LabeledValue } from 'antd/lib/select';
import { CancelToken, NoommanModel } from '../../../config/types';
const { Option } = Select;

interface SelectorProps {
  updateFormItem: Function,
  getFormItem: Function,
  formItemId: string,
  className: string,
  multiSelect?: boolean
};

const Selector: React.FunctionComponent<SelectorProps> = ({ 
  getFormItem, 
  updateFormItem, 
  formItemId, 
  className,
  multiSelect
}) => {
  
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const cancelToken = CancelToken;
    const source = cancelToken.source();

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
      source.cancel();
    }
  }, [className]);

  const selectAndUpdateForm = (selectedInstanceId: string | number | LabeledValue) => {
    const instance = data.find(item => item.id === selectedInstanceId);
    const currentSelections = getFormItem(formItemId);
    if (! currentSelections) {
      updateFormItem({ [formItemId]: [instance]})
    }
    else {
      if (! multiSelect) {
        updateFormItem({ [formItemId]: [instance]})
      }
      else {
        updateFormItem({ [formItemId]: [...currentSelections, instance]})
      }
    }
  }

  // When we set key = child.id we will get this id
  // for free when we call onSelect or onDeselect
  const options = data?.map((child: NoommanModel) => 
    <Option key={child.id}>
      {child.id} {child.className}
    </Option>)

  //const mode: ModeOption = multiSelect ? 'multiple' as ModeOption : 'default' as ModeOption;
  const mode: ModeOption = (multiSelect ? 'multiple' : 'default') as ModeOption;
  
  return (
    <Spin spinning={isLoading}>
      <Select
        mode={mode}
        size={'large'}
        style={{ width: '100%' }}
        onSelect={(instanceId: string | number | LabeledValue) => selectAndUpdateForm(instanceId)}
        onDeselect={(instanceId: string | number | LabeledValue) => selectAndUpdateForm(instanceId)}
      >
        {options}
      </Select>
    </Spin>
  )
}


export default Selector;