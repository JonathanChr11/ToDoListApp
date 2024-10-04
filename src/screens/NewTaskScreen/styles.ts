import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  newTaskContainer: {
    marginHorizontal: 20,
    marginVertical: 40,
  },
  newTaskSubcontainer: {
    display: 'flex',
    gap: 30,
  },
  newTaskBackButton: {
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
  newTaskHeading: {
    fontSize: 52,
    marginVertical: 20,
  },
  newTaskContent: {
    display: 'flex',
    gap: 10,
  },
  newTaskActiveBg: {
    backgroundColor: 'black',
  },
  newTaskActiveText: {
    color: 'white',
  },
  newTaskAction: {
    display: 'flex',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  newTaskAddButton: {
    padding: 20,
    borderRadius: 50,
    backgroundColor: '#FFFFFFC0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  newTaskParagraph: {
    fontSize: 16,
  },
  newTaskTime: {
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
  newTaskProject: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 100,
    elevation: 3,
  },
  newTaskInput: {
    height: 60,
    width: '100%',
    padding: 20,
    borderRadius: 100,
    borderWidth: 1,
    fontSize: 16,
  },
  newTaskCreate: {
    display: 'flex',
    height: 125,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  newTaskButtonContainer: {
    width: '100%',
    backgroundColor: 'black',
  },
  newTaskButtonText: {
    color: 'white',
  },
});
