import React, {useState} from 'react';
import {Platform, Switch} from 'react-native';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnable, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnable);
    onChange(!isEnable);
  };

  return (
    <Switch
      trackColor={{false: '#d9d9db', true: '#5856d6'}}
      thumbColor={Platform.OS === 'android' ? '#5856d6' : ''}
      onValueChange={toggleSwitch}
      value={isEnable}
    />
  );
};

export default CustomSwitch;
