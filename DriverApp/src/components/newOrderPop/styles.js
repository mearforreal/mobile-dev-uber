import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: '100%',
    padding: 10,
    paddingBottom: 20,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  popupContainer: {
    backgroundColor: 'black',

    borderRadius: 10,
    height: 250,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  minutes: {
    color: 'lightgrey',
    fontSize: 36,
  },
  distance: {
    color: 'lightgrey',
    fontSize: 25,
  },
  uberType: {
    color: 'lightgrey',
    fontSize: 20,
    marginHorizontal: 10,
  },
  userBackground: {
    backgroundColor: '#008bff',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
  },
  declineBtn: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 50,
    width: 100,
    alignItems: 'center',
  },
  declineText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
