import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const NewOrderPopup = ({newOrder, onDecline, onAccept, duration, distance}) => {
  return (
    <View style={styles.root}>
      <Pressable onPress={onDecline} style={styles.declineBtn}>
        <Text style={styles.declineText}>Decline</Text>
      </Pressable>
      <Pressable onPress={onAccept} style={styles.popupContainer}>
        <View style={styles.row}>
          <Text style={styles.uberType}>{newOrder.type}</Text>

          <View style={styles.userBackground}>
            <FontAwesome name="user" color={'white'} size={35} />
          </View>
          <Text style={styles.uberType}>
            {newOrder?.user?.rating || 5.0}{' '}
            <AntDesign name={'star'} color={'yellow'} size={18} />
          </Text>
        </View>
        <Text style={styles.minutes}>{duration} min</Text>
        <Text style={styles.distance}>{distance} km</Text>
      </Pressable>
    </View>
  );
};

export default NewOrderPopup;
