import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const ChangeThemeScreen = () => {
  const {setDarkTheme, setLightTheme} = useContext(ThemeContext);

  return (
    <View>
      <HeaderTitle title="Change theme" />

      <TouchableOpacity
        activeOpacity={0.9}
        onPress={setLightTheme}
        style={{
          backgroundColor: '#fff',
          width: 150,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          borderColor: '#5856d6',
          borderWidth: 1,
        }}>
        <Text style={{color: '#5856d6', fontSize: 20}}>Ligth </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={setDarkTheme}
        style={{
          backgroundColor: '#5856d6',
          width: 150,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: '#fff', fontSize: 20}}> Dark</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeThemeScreen;
