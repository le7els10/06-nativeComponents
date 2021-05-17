import React from 'react';
import {Text, View} from 'react-native';
import sty from '../theme/AppTheme';

interface Props {
  title: string;
}

const HeaderTitle = ({title}: Props) => {
  return (
    <View style={{marginBottom: 10}}>
      <Text style={sty.title}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;
