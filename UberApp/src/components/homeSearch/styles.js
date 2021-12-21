import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#e7e7e7',
    margin: 10,
    padding: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#535353',
  },
  timeContainer: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: '2%',
    borderRadius: 50,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '4%',
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: '2%',
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 16,
  },
});
export default styles;
