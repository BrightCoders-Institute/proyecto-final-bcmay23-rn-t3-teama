import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 19,
    marginTop: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '70%',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    backgroundColor: '#A0A0A0',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
