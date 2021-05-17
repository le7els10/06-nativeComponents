import React from 'react';
import {Animated} from 'react-native';
import useAnimation from '../hooks/useAnimation';

interface Props {
  uri: string;
}

const FadeInImage = ({uri}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  return (
    <Animated.Image
      source={{uri}}
      onLoad={fadeIn}
      style={{
        width: '100%',
        height: 400,
        opacity: opacity,
      }}
    />
  );
};

export default FadeInImage;
