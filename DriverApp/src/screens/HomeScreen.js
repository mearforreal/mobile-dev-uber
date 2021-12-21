import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {GOOGLE_API_KEY} from '@env';
import MapViewDirections from 'react-native-maps-directions';
import NewOrderPopup from '../components/newOrderPop/NewOrderPopup';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './homeStyle';

import {Auth, API, graphqlOperation} from 'aws-amplify';
import {getCar, listOrders} from '../graphql/queries';
import {updateCar, updateOrder} from '../graphql/mutations';

// const origin = {latitude: 43.25932559999999, longitude: 76.95648659999999};
// const destination = {latitude: 43.273625, longitude: 76.939518};

const HomeScreen = () => {
  const [order, setOrder] = useState(null);
  const [myPosition, setMyPosition] = useState(null);
  const [car, setCar] = useState(null);
  const [newOrders, setNewOrders] = useState([]);

  const [newOrder, setNewOrder] = useState({
    id: '1',
    type: 'CarXL',
    originLatitude: 43.25932559999999,
    oreiginLongitude: 76.95648659999999,

    destLatitude: 43.273625,
    destLongitude: 76.939518,
    user: {
      rating: 4.8,
      username: 'John Smith',
    },
  });

  const fetchCar = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      const carData = await API.graphql(
        graphqlOperation(getCar, {id: userData.attributes.sub}),
      );
      setCar(carData.data.getCar);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchOrders = async () => {
    try {
      const ordersData = await API.graphql(
        graphqlOperation(listOrders, {
          filter: {status: {eq: 'NEW'}},
        }),
      );
      setNewOrders(ordersData.data.listOrders.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCar();
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [car?.isActive]);

  const onDecline = () => {
    setNewOrders(newOrders.slice(1));
  };

  const onAccept = async newOrder => {
    try {
      const input = {
        id: newOrder.id,
        status: 'PICKING_UP_CLIENT',
        carId: car.id,
      };
      const orderData = await API.graphql(
        graphqlOperation(updateOrder, {input}),
      );
      setOrder(orderData.data.updateOrder);
    } catch (e) {
      console.warn(e);
    }

    setNewOrders(newOrders.slice(1));
  };

  const onDropOff = async () => {
    try {
      const input = {
        id: order?.id,
        status: 'DROPPING_OFF',
      };
      const orderData = await API.graphql(
        graphqlOperation(updateOrder, {input}),
      );
      setOrder(orderData.data.updateOrder);
      return;
    } catch (e) {
      console.warn(e);
    }
  };

  const onComplete = async () => {
    try {
      const input = {
        id: order.id,
        status: 'COMPLETED',
      };
      const orderData = await API.graphql(
        graphqlOperation(updateOrder, {input}),
      );
      setOrder(orderData.data.updateOrder);
    } catch (e) {
      console.warn(e);
    }
  };

  const onGoPress = async () => {
    // Update the car and set it to active
    try {
      const userData = await Auth.currentAuthenticatedUser();
      const input = {
        id: userData.attributes.sub,
        isActive: !car.isActive,
      };
      const updatedCarData = await API.graphql(
        graphqlOperation(updateCar, {input}),
      );
      setCar(updatedCarData.data.updateCar);
    } catch (e) {
      console.error(e);
    }
  };

  const onUserLocationChange = async event => {
    const {latitude, longitude, heading} = event.nativeEvent.coordinate;
    // Update the car and set it to active

    if (car?.latitude !== latitude && car?.longitude !== longitude) {
      try {
        const userData = await Auth.currentAuthenticatedUser();
        const input = {
          id: userData.attributes.sub,
          latitude,
          longitude,
          heading,
        };
        const updatedCarData = await API.graphql(
          graphqlOperation(updateCar, {input}),
        );

        setCar(updatedCarData.data.updateCar);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const dropOffDep = useRef(false);
  const onDirectionFound = event => {
    if (order) {
      setOrder({
        ...order,
        distance: event.distance,
        duration: event.duration,
        pickedUp: order?.pickedUp || event.distance < 0.2,
        isFinished: order.pickedUp && event.distance < 0.2,
      });
      console.log(event.distance);
      console.log(order);
      setTimeout(() => {
        dropOffDep.current = true;
      }, 500);
    }
  };

  useEffect(() => {
    if (order && order.pickedUp && order?.status !== 'DROPPING_OFF') {
      onDropOff();
    }
  }, [dropOffDep.current]);

  const getDestination = () => {
    if (order && order.pickedUp) {
      return {
        latitude: order.destLatitude,
        longitude: order.destLongitude,
      };
    }
    return {
      latitude: order.originLatitude,
      longitude: order.oreiginLongitude,
    };
  };

  const renderBottomStatus = () => {
    if (order && order.isFinished) {
      return (
        <View style={{alignItems: 'center'}}>
          <Pressable
            // onPress={onComplete}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#cb1a1a',
              width: 200,
              padding: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              COMPLETE ORDER
            </Text>
          </Pressable>
          <Text style={styles.bottomText}>{order?.user?.username}</Text>
        </View>
      );
    }

    if (order && order.pickedUp) {
      return (
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>
              {order?.duration ? order?.duration.toFixed(1) : '?'} min
            </Text>
            <View
              style={{
                backgroundColor: '#d41212',
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                marginHorizontal: 10,
              }}>
              <FontAwesome name="user" color={'white'} size={20} />
            </View>
            <Text>{order.distance ? order.distance.toFixed(1) : '?'} km</Text>
          </View>
          <Text
            style={[styles.bottomText, {fontWeight: 'normal', fontSize: 20}]}>
            Droping off {order?.user?.username}
          </Text>
        </View>
      );
    }

    if (order) {
      return (
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>
              {order?.duration ? order?.duration.toFixed(1) : '?'} min
            </Text>
            <View
              style={{
                backgroundColor: '#48d42a',
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                marginHorizontal: 10,
              }}>
              <FontAwesome name="user" color={'white'} size={20} />
            </View>
            <Text>{order.distance ? order.distance.toFixed(1) : '?'} km</Text>
          </View>
          <Text
            style={[styles.bottomText, {fontWeight: 'normal', fontSize: 20}]}>
            Picking up {order?.user?.username}
          </Text>
        </View>
      );
    }

    if (car?.isActive) {
      return <Text style={styles.bottomText}>You are online</Text>;
    } else {
      return <Text style={styles.bottomText}>You are offline</Text>;
    }
  };

  return (
    <View>
      <MapView
        style={{height: Dimensions.get('window').height - 125, width: '100%'}}
        showsUserLocation={true}
        showsMyLocationButton={true}
        provider={PROVIDER_GOOGLE}
        onUserLocationChange={onUserLocationChange}
        initialRegion={{
          latitude: 43.25932559999999,
          longitude: 76.95648659999999,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}>
        {order && (
          <MapViewDirections
            origin={{
              latitude: car?.latitude,
              longitude: car?.longitude,
            }}
            onReady={onDirectionFound}
            destination={getDestination()}
            apikey={GOOGLE_API_KEY}
            strokeWidth={5}
            strokeColor="black"
          />
        )}
      </MapView>

      <Pressable
        onPress={() => {
          console.warn('balace');
        }}
        style={styles.balanceBtn}>
        <Text style={styles.balancetext}>
          <Text style={{color: 'green'}}> $</Text> 0.00
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          console.warn('Online');
        }}
        style={[styles.roundBtn, {top: 10, left: 10}]}>
        <Entypo name={'menu'} size={30} color={'#4a4a4a'} />
      </Pressable>

      {/* <Pressable
        onPress={() => {
          console.warn('Online');
        }}
        style={[styles.roundBtn, {top: 10, right: 10}]}>
        <Ionicons name={'search'} size={30} color={'#4a4a4a'} />
      </Pressable> */}

      <Pressable
        onPress={() => {
          console.warn('Online');
        }}
        style={[styles.roundBtn, {bottom: 120, left: 10}]}>
        <Entypo name={'shield'} size={30} color={'#1495ff'} />
      </Pressable>

      {!order && (
        <Pressable onPress={onGoPress} style={styles.goBtn}>
          <Text style={styles.goText}>{car?.isActive ? 'END' : 'GO'}</Text>
        </Pressable>
      )}

      <Pressable
        onPress={async () => {
          try {
            const userData = await Auth.currentAuthenticatedUser();
            const input = {
              id: userData.attributes.sub,
              isActive: !car.isActive,
            };
            const updatedCarData = await API.graphql(
              graphqlOperation(updateCar, {input}),
            );
            setCar(updatedCarData.data.updateCar);
          } catch (e) {
            console.error(e);
          }
          Auth.signOut();
        }}
        style={[
          styles.roundBtn,
          {
            bottom: 120,
            right: 10,
            backgroundColor: 'red',
            paddingLeft: 12,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <MaterialCommunityIcons
          name={'logout'}
          size={30}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          color={'white'}
        />
      </Pressable>

      <View style={styles.bottomContainer}>
        <Ionicons name={'options'} size={30} color={'#4a4a4a'} />
        {renderBottomStatus()}

        <Entypo name={'menu'} size={30} color={'#4a4a4a'} />
      </View>

      {car?.isActive && newOrders.length > 0 && !order && (
        <NewOrderPopup
          newOrder={newOrders[0]}
          duration={2}
          distance={0.5}
          onDecline={onDecline}
          onAccept={() => onAccept(newOrders[0])}
        />
      )}
    </View>
  );
};

export default HomeScreen;
