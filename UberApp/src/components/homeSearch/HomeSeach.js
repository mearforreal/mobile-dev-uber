import React from 'react';
import {View, Text, Pressable, TouchableHighlight} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/core';

const HomeSeach = () => {
  const navigation = useNavigation();
  const goToSearch = () => {
    navigation.navigate('DestinationSearch');
  };
  return (
    <View>
      {/* Input box */}

      <TouchableHighlight
        onPress={goToSearch}
        style={styles.inputBox}
        activeOpacity={0.6}
        underlayColor="#DDDDDD">
        <>
          <Text style={styles.inputText}>Where to?</Text>
          <View style={styles.timeContainer}>
            <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
            <Text>Now</Text>
            <MaterialIcons name={'keyboard-arrow-down'} size={16} />
          </View>
        </>
      </TouchableHighlight>
      <View>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <AntDesign name={'clockcircle'} size={20} color={'#fff'} />
          </View>
          <Text style={styles.destinationText}>Spin Nightclub</Text>
        </View>
        {/* Home destination */}
        <View style={styles.row}>
          <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
            <Entypo name={'home'} size={20} color={'#fff'} />
          </View>
          <Text style={styles.destinationText}>Spin Nightclub</Text>
        </View>
      </View>
      {/* Previous destination */}
    </View>
  );
};

export default HomeSeach;
