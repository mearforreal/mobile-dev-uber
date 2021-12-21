import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if neccesry</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        illo molestiae cumque aliquam delectus esse quo animi eos beatae nihil?
      </Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  );
};

export default CovidMessage;
