import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DestinationSearch from '../screens/destination/DestinationSearch';
import SearchResult from '../screens/searchResult/SearchResult';
import OrderScreen from '../screens/OrderScreen';

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
      <Stack.Screen name={'DestinationSearch'} component={DestinationSearch} />
      <Stack.Screen name={'SearchResult'} component={SearchResult} />
      <Stack.Screen name={'OrderScreen'} component={OrderScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
