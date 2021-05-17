import React from 'react';
import {SectionList, Text, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import sty from '../theme/AppTheme';

interface Casas {
  casa: string;
  data: string[];
}
const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Thor',
      'Spiderman',
      'Thor',
      'Spiderman',
      'Thor',
      'Spiderman',
      'Thor',
      'Spiderman',
      'Thor',
      'Spiderman',
      'Thor',
      'Spiderman',
      'Thor',
      'Spiderman',
    ],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama'],
  },
];
const SectionListScreen = () => {
  return (
    <View style={sty.globalMargin}>
      {/* <HeaderTitle title="Section list" /> */}
      <SectionList
        sections={casas}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, key) => `${item}-${key}`}
        ListHeaderComponent={() => <HeaderTitle title="Section list" />}
        stickySectionHeadersEnabled={true}
        ItemSeparatorComponent={() => <View style={sty.jumper}></View>}
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: '#fff'}}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
      />
    </View>
  );
};

export default SectionListScreen;
