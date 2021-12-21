import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import HomeNavigator from './HomeNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import CustomDrawer from './CustomDrawer';

const Dummy = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{props.name}</Text>
    </View>
  );
};

const RootNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="HomeNavigator" component={HomeNavigator} />

        <Drawer.Screen name="Your Trips">
          {() => <Dummy name="Your Trips" />}
        </Drawer.Screen>

        <Drawer.Screen name="Help">{() => <Dummy name="Help" />}</Drawer.Screen>

        <Drawer.Screen name="Wallet">
          {() => <Dummy name="Wallet" />}
        </Drawer.Screen>

        <Drawer.Screen name="Settings">
          {() => <Dummy name="Settings" />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
