import Auth from '@aws-amplify/auth';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: 'black', padding: 15, marginTop: -5}}>
        {/* Uber Row */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#cacaca',
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 10,
            }}
          />
          <View>
            <Text style={{color: 'white', fontSize: 24}}>Erbol Meiyr</Text>
            <Text style={{color: 'lightgrey'}}>5.00 *</Text>
          </View>
        </View>

        {/* Messages Row */}
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#919191',
            paddingVertical: 5,
            marginVertical: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              console.warn('Messages');
            }}>
            <Text style={{color: '#DDDDDD', paddingVertical: 5}}>Messages</Text>
          </TouchableOpacity>
        </View>

        {/* Do more */}
        <TouchableOpacity
          onPress={() => {
            console.warn('Do more with your account');
          }}>
          <Text style={{color: '#DDDDDD', paddingVertical: 5}}>
            Do more with your account
          </Text>
        </TouchableOpacity>
        {/* Make Money */}
        <TouchableOpacity
          onPress={() => {
            console.warn('Make money');
          }}>
          <Text style={{color: '#DDDDDD', paddingVertical: 5}}>
            Make money with driving
          </Text>
        </TouchableOpacity>

        {/* Make Money */}
        <TouchableOpacity
          onPress={() => {
            Auth.signOut();
          }}>
          <Text style={{color: '#DDDDDD', paddingVertical: 5}}>Logout</Text>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
