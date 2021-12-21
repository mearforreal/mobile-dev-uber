import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, Alert} from 'react-native';
import HomeMap from '../../components/homeMap/HomeMap';
import UberType from '../../components/uberTypes/UberType';
import RouteMap from '../../components/routeMap/RouteMap';
import {useNavigation, useRoute} from '@react-navigation/core';
// import API from '@aws-amplify/api';
import {API, graphqlOperation} from 'aws-amplify';
import {createOrder} from '../../graphql/mutations';
import {Auth} from '@aws-amplify/auth';
import {useRef} from 'react';

const SearchResult = props => {
  const typeState = useState(null);

  const route = useRoute();
  const navigation = useNavigation();

  const {origin, destination} = route.params;

  const onSubmit = async () => {
    const [type] = typeState;
    if (!type) {
      return;
    }

    // submit to service
    const userInfo = await Auth.currentAuthenticatedUser();

    const date = new Date();
    const input = {
      createdAt: date.toISOString(),
      type,
      originLatitude: origin.details.geometry.location.lat,
      oreiginLongitude: origin.details.geometry.location.lng,

      destLatitude: destination.details.geometry.location.lat,
      destLongitude: destination.details.geometry.location.lng,

      status: 'NEW',

      userId: userInfo.attributes.sub,
      carId: '0',
    };
    try {
      const response = await API.graphql(
        graphqlOperation(createOrder, {
          input: input,
        }),
      );

      navigation.navigate('OrderScreen', {id: response.data?.createOrder.id});
    } catch (e) {
      console.error(e);
    }
  };

  // const mapRef = useRef(null);

  // useEffect(() => {
  //   //Zoom and fit marker
  //   mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
  //     edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
  //   });
  // }, []);

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap origin={origin} destination={destination} />
      </View>

      <View>
        <UberType typeState={typeState} onSubmit={onSubmit} />
      </View>
    </View>
  );
};

export default SearchResult;
