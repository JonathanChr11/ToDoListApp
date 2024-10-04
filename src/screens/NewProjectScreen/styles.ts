import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  newProjectContainer: {
    marginHorizontal: 20,
    marginVertical: 40,
  },
  newProjectSubcontainer: {
    display: 'flex',
    gap: 30,
  },
  newProjectBackButton: {
    width: 70,
    padding: 20,
    borderRadius: 50,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  newProjectHeading: {
    fontSize: 52,
    marginVertical: 20,
  },
  newProjectContent: {
    display: 'flex',
    gap: 10,
  },
  newProjectInput: {
    height: 60,
    width: '100%',
    padding: 20,
    borderRadius: 100,
    borderWidth: 1,
    fontSize: 16,
  },
  newProjectAction: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  newProjectActive: {
    padding: 5,
    backgroundColor: '#3B7FF6',
    borderRadius: 50,
  },
  newProjectGradient: {
    padding: 30,
    borderRadius: 50,
  },
  newProjectParagraph: {
    fontSize: 16,
  },
  newProjectCreate: {
    display: 'flex',
    height: 350,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  newProjectButtonContainer: {
    width: '100%',
    backgroundColor: 'black',
  },
  newProjectButtonText: {
    color: 'white',
  },
});
