import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UberTypeRow = props => {
  const {type, onPress, isSelected} = props;

  function getImageName() {
    if (type.type === 'CarX') {
      return require('../../assets/images/UberX.jpeg');
    } else if (type.type === 'CarXL') {
      return require('../../assets/images/UberXL.jpeg');
    } else if (type.type === 'Car') {
      return require('../../assets/images/Comfort.jpeg');
    }
  }
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: isSelected ? '#efefef' : 'white'},
      ]}>
      {/* Image */}

      <Image
        uri={`../../assets/images/${type.type}.jpeg`}
        style={styles.image}
        source={getImageName()}
      />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} <Ionicons name={'person'} size={16} />3
        </Text>
        <Text style={styles.time}>8:03PM drop-off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </Pressable>
  );
};

export default UberTypeRow;
