import React, {useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import FadeInImage from '../components/FadeInImage';
import HeaderTitle from '../components/HeaderTitle';
import sty from '../theme/AppTheme';

const InfiniteScrollScreen = () => {
  const [Numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const renderItem = (item: number) => {
    return (
      <FadeInImage uri={`https://picsum.photos/id/${item}/500/400`} />
      // <Image
      //   style={{width: '100%', height: 400}}
      //   source={{uri: `https://picsum.photos/id/${item}/500/400`}}
      // />
    );
  };

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = Numbers.length + i;
    }

    setNumbers([...Numbers, ...newArray]);
  };

  return (
    <View style={sty.globalMargin}>
      <FlatList
        data={Numbers}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item, i) => `${item}-${i}`}
        ListHeaderComponent={<HeaderTitle title="Infinite scroll" />}
        onEndReached={() => loadMore()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <View style={{height: 50, alignItems: 'center'}}>
            <ActivityIndicator size={40} color="#5856d6" />
          </View>
        }
      />
    </View>
  );
};

export default InfiniteScrollScreen;
