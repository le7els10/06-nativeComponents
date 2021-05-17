import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  menuItem: MenuItem;
}

const FlatListMenuItem = ({menuItem}: Props) => {
  const {navigate} = useNavigation();
  const {setDarkTheme, setLightTheme, theme} = useContext(ThemeContext);

  return (
    <View style={sty.container}>
      <Icon name={menuItem.icon} size={20} color={theme.colors.primary} />
      <Text style={sty.text}>{menuItem.name}</Text>
      <TouchableOpacity
        style={sty.rigthArrow}
        onPress={() => {
          navigate(menuItem.component);
        }}>
        <Icon name="chevron-forward-outline" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const sty = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
  },
  rigthArrow: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default FlatListMenuItem;
