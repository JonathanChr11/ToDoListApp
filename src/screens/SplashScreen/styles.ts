import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  splashContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
  },
  splashLogo: {
    height: 150,
    width: 150,
  },
  splashParagraph: {
    fontSize: 20,
  },
  splashSubcontainer: {
    display: 'flex',
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  splashInput: {
    height: 60,
    width: '100%',
    padding: 20,
    borderRadius: 100,
    borderWidth: 1,
    fontSize: 16,
  },
  splashError: {
    color: 'red',
  },
  splashButtonContainer: {
    width: '100%',
    backgroundColor: 'black',
  },
  splashButtonText: {
    color: 'white',
  },
});
