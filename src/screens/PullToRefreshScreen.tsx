import React, {useState} from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import sty from '../theme/AppTheme';

const PullToRefreshScreen = () => {
  const [Refresing, setRefresing] = useState(false);
  const [Data, setData] = useState<string>('Pull to refresh');

  const onRefresh = () => {
    setRefresing(true);
    setTimeout(() => {
      setData('el pepe');
      setRefresing(false);
    }, 1000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={Refresing} onRefresh={onRefresh} />
      }>
      <View style={sty.globalMargin}>
        <HeaderTitle title={Data} />
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
