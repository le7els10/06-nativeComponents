import React from 'react';
import {useState} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Switch} from 'react-native';
import {Text, View} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';

const SwitchScreen = () => {
  const [state, setstate] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const {isActive, isHappy, isHungry} = state;

  const onChange = (value: boolean, field: string) => {
    setstate({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={sty.container}>
      <HeaderTitle title="Switches" />
      <View style={sty.switchRow}>
        <Text style={sty.switchText}>Is active</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={sty.switchRow}>
        <Text style={sty.switchText}>Is happy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <View style={sty.switchRow}>
        <Text style={sty.switchText}>Is hungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>

      <Text style={sty.switchText}>{JSON.stringify(state, null, 4)}</Text>
    </View>
  );
};
const sty = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  switchText: {
    fontSize: 20,
  },
});
export default SwitchScreen;
