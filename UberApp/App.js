/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import Geolocation from '@react-native-community/geolocation';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import {withAuthenticator} from 'aws-amplify-react-native';

// import HomeScreen from './src/screens/HomeScreen';
// import DestinationSearch from './src/screens/destination/DestinationSearch';
// import SearchResult from './src/screens/searchResult/SearchResult';
import RootNavigator from './src/navigations/RootNavigator';

navigator.geolocation = require('@react-native-community/geolocation');

import Amplify from '@aws-amplify/core';
import config from './src/aws-exports';
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const requestGeoPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Uber App Location Permission',
          message:
            'Uber App needs access to your camera ' +
            'so you can take awesome rides.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  //asd

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestGeoPermission();
    } else {
      //ios request
      Geolocation.requestAuthorization();
    }
  }, []);
  return (
    // <SafeAreaView style={backgroundStyle}>
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigator />
    </>

    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withAuthenticator(App);
