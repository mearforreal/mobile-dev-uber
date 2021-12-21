import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: '4%',
  },
  image: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  time: {
    color: '#5d5d5d',
  },
  rightContainer: {
    width: 100,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  type: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
});

export default styles;
