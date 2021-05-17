import React, {useRef} from 'react';
import {Animated, Button, Easing, StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import useAnimation from '../hooks/useAnimation';

const Animation101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, startMoving} = useAnimation();
  return (
    <View style={sty.constainer}>
      <Animated.View
        style={{
          ...sty.purpleBox,
          opacity: opacity,
          transform: [{translateY: position}],
        }}
      />

      <Button
        title="Fade in"
        onPress={() => {
          fadeIn();
          startMoving(-100);
        }}
      />
      <Button title="Fade out" onPress={fadeOut} />
    </View>
  );
};

const sty = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 10,
    backgroundColor: '#5856D6',
  },
});

export default Animation101Screen;
