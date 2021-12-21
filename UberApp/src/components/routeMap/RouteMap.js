import React, {useEffect, useRef} from 'react';
import {View, Text, Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API_KEY} from '@env';
const RouteMap = ({origin, destination}) => {
  // const mapRef = useRef(null);
  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  const mapRef = useRef(null);

  useEffect(() => {
    //Zoom and fit marker

    setTimeout(function () {
      mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
        edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
      });
    }, 800);

    console.log('Hello');
  }, []);

  return (
    <MapView
      ref={mapRef}
      style={{height: '100%', width: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: originLoc.latitude,
        longitude: originLoc.longitude,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        strokeWidth={3}
        strokeColor="black"
        apikey={GOOGLE_API_KEY}
      />
      <Marker coordinate={originLoc} title={'origin'} identifier="origin" />
      <Marker
        coordinate={destinationLoc}
        title={'destination'}
        identifier="destination"
      />
    </MapView>
  );
};

export default RouteMap;
