import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import UberTypeRow from '../uberTypeRow/UberTypeRow';
import typesData from '../../assets/data/types';

const UberType = ({typeState, onSubmit}) => {
  const [selectedType, setSelectedType] = typeState;

  return (
    <View>
      {/* <FlatList
        data={typesData}
        renderItem={type => (
          <UberTypeRow
            type={type.item}
            onPress={() => setSelectedType(type.type)}
            isSelected={type.type === selectedType}
          />
        )}
        keyExtractor={type => type.id}
      /> */}

      {typesData.map(type => (
        <UberTypeRow
          type={type}
          key={type.id}
          isSelected={type.type === selectedType}
          onPress={() => setSelectedType(type.type)}
        />
      ))}

      <TouchableOpacity
        onPress={onSubmit}
        style={{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}>
          Confirm Uber
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UberType;
