import React from 'react';
import {Alert, Button, Text, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert('Ups!', 'El pepe', [{text: 'Cancel'}, {text: 'OK'}], {
      cancelable: true,
    });
  };

  const showPrompt = () => {
    // Alert.prompt('ups!', 'mensaje');
  };

  return (
    <View>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar alerta" onPress={showAlert} />
      <Button title="Mostrar prompt" onPress={showPrompt} />
    </View>
  );
};

export default AlertScreen;
