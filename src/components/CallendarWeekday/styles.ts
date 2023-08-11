import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  weekday: {
    borderWidth: 1.5,
    width: 50,
    height: 85,
    borderRadius: 10,
    marginRight: 23,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
  },
  dayContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    width: 38,
    height: 34,
    justifyContent: 'center',
  },
  dayText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
  },
});
