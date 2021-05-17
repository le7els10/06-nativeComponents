import React from 'react';
import {FlatList, Text, View} from 'react-native';
import FlatListMenuItem from '../components/FlatListMenuItem';
import HeaderTitle from '../components/HeaderTitle';
import {menuItems} from '../data/MenuItems';
import sty from '../theme/AppTheme';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, ...sty.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones del menú" />}
        ItemSeparatorComponent={() => <View style={sty.jumper}></View>}
      />
    </View>
  );
};

export default HomeScreen;
