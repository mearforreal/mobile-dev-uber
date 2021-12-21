import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import CovidMessage from '../components/covidMessage/CovidMessage';
import HomeMap from '../components/homeMap/HomeMap';
import HomeSeach from '../components/homeSearch/HomeSeach';

const HomeScreen = () => {
  return (
    <View>
      <View style={{height: '100%', justifyContent: 'space-between'}}>
        <View style={{flex: 1}}>
          <HomeMap />
        </View>

        <View>
          <CovidMessage />
          <HomeSeach />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
