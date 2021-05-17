import React from 'react';
import {useState} from 'react';
import {Button, Modal, Text, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import sty from '../theme/AppTheme';

const ModalScreen = () => {
  const [IsVisible, setIsVisible] = useState(false);

  const showModal = () => {};

  return (
    <View style={sty.globalMargin}>
      <HeaderTitle title="Modal" />

      <Button title="Abrir modal" onPress={() => setIsVisible(true)} />

      <Modal animationType="fade" visible={IsVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            // width: 400,
            // height: 200,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* contenido */}
          <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              height: 200,
              width: 350,
            }}>
            <HeaderTitle title="Modal" />
            <Text>Cuerpo de modal</Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;
