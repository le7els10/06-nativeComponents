import React, {useState} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import {FormItems} from '../data/MenuItems';
import {useForm} from '../hooks/useForm';
import sty from '../theme/AppTheme';

const TextInputScreen = () => {
  const {onChange, formulario} = useForm(FormItems);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={sty.globalMargin}>
          <HeaderTitle title="text inputs" />

          <TextInput
            style={styles.input}
            placeholder="Ingrese nombre"
            onChangeText={e => onChange(e, 'name')}
          />
          <TextInput
            style={styles.input}
            placeholder="Ingrese correo"
            autoCorrect={false}
            onChangeText={e => onChange(e, 'email')}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Ingrese telefono"
            keyboardType="number-pad"
            onChangeText={e => onChange(e, 'phone')}
          />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text>Subscribirme</Text>
            <CustomSwitch
              isOn={formulario.subscribe}
              onChange={e => onChange(e, 'subscribe')}
            />
          </View>

          <Text>{JSON.stringify(formulario, null, 4)}</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: '#bbb',
    marginVertical: 10,
  },
});

export default TextInputScreen;
