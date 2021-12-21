import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  textInput: {
    height: 50,
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 20,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconConteiner: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {},
  separator: {
    backgroundColor: '#efefef',
    height: 2,
  },

  listView: {
    position: 'absolute',
    top: 110,
  },
  autoCompleteContainer: {
    position: 'absolute',
    top: 5,
    left: 10,
    right: 10,
  },

  circle: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    borderRadius: 50,
    top: 33,
    left: 10,
  },

  line: {
    width: 1,
    height: 40,
    backgroundColor: '#c4c4c4',
    position: 'absolute',
    borderRadius: 20,
    top: 40,
    left: 12,
  },

  sqaure: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 85,
    left: 10,
  },
});

export default styles;
