import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet} from 'react-native';
import {Text, View} from 'react-native';

const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      {
        useNativeDriver: false,
      },
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false},
      ).start();
    },
  });

  return (
    <View style={sty.constainer}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[sty.purpleBox, pan.getLayout()]}
      />
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
    backgroundColor: '#bbb',
  },
});

export default Animation102Screen;
