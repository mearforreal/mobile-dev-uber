import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import styles from './styles';
import {GOOGLE_API_KEY} from '@env';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';
import {useNavigation} from '@react-navigation/core';

const DestinationSearch = () => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  const navigation = useNavigation();
  const homePlace = {
    description: 'Home',
    geometry: {location: {lat: 43.2647, lng: 76.952}},
  };
  const workPlace = {
    description: 'Work',
    geometry: {location: {lat: 43.2351, lng: 76.9097}},
  };

  useEffect(() => {
    if (origin && destination) {
      navigation.navigate('SearchResult', {
        origin,
        destination,
      });
    }
  }, [origin, destination]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Circle near form */}
        <View style={styles.circle}></View>

        {/* Line between dots */}
        <View style={styles.line}></View>
        {/* Squre near to */}
        <View style={styles.sqaure}></View>

        <GooglePlacesAutocomplete
          onFail={error => {
            console.error(error);
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel={'Current Location'}
          styles={{
            textInput: styles.textInput,
            container: styles.autoCompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          placeholder="Where from"
          debounce={400}
          fetchDetails={true}
          returnKeyType={'search'}
          minLength={2}
          onPress={(data, details = null) => {
            setOrigin({data, details});
          }}
          query={{
            key: GOOGLE_API_KEY,
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
          renderDescription={data => data.description || data.vicinity}
        />

        <GooglePlacesAutocomplete
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autoCompleteContainer,
              top: 60,
            },
            separator: styles.separator,
          }}
          placeholder="Where to"
          debounce={400}
          fetchDetails={true}
          returnKeyType={'search'}
          minLength={2}
          onPress={(data, details = null) => {
            setDestination({data, details});
          }}
          query={{
            key: GOOGLE_API_KEY,
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
          predefinedPlaces={[homePlace, workPlace]}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
