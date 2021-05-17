import {useRef} from 'react';
import {Easing, Animated} from 'react-native';

const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(position, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const startMoving = (init: number = 100, duration: number = 300) => {
    position.setValue(init);

    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      //   easing: Easing.bounce,
    }).start();
  };

  //RETORNAR
  return {fadeOut, fadeIn, opacity, position, startMoving};
};

export default useAnimation;
