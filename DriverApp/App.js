/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';
import Geolocation from '@react-native-community/geolocation';
import Amplify, {API, Auth, graphqlOperation} from 'aws-amplify';
import config from './src/aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';
import {getCarId} from './src/graphql/queries';
import {updateCar, updateOrder, createCar} from './src/graphql/mutations';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const updateUserCar = async () => {
      //Get auth user

      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      if (!authUser) {
        return;
      }

      //Check if user has car
      const carData = await API.graphql(
        graphqlOperation(getCarId, {id: authUser.attributes.sub}),
      );

      if (!!carData.data.getCar) {
        console.log('User has a car');
        return;
      }

      // if not car create a car
      const newCar = {
        id: authUser.attributes.sub,
        type: 'Car',
        userId: authUser.attributes.sub,
      };

      await API.graphql(graphqlOperation(createCar, {input: newCar}));
    };
    updateUserCar();
    return updateUserCar;
  }, []);

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

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestGeoPermission();
    } else {
      //ios request
      Geolocation.requestAuthorization();
    }
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default withAuthenticator(App);
