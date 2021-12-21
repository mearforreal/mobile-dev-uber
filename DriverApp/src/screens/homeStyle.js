import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bottomContainer: {
    height: 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  bottomText: {
    fontSize: 22,
    color: '#4a4a4a',
    fontWeight: 'bold',
  },
  roundBtn: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
  },
  goBtn: {
    position: 'absolute',
    backgroundColor: '#1495ff',
    padding: 10,
    borderRadius: 40,
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 120,
    left: Dimensions.get('window').width / 2 - 37,
  },
  goText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  balanceBtn: {
    position: 'absolute',
    backgroundColor: '#1c1c1c',
    width: 100,
    height: 50,
    borderRadius: 25,

    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
    left: Dimensions.get('window').width / 2 - 50,
  },
  balancetext: {
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
    marginRight: 5,
  },
});
