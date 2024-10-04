import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  projectDetailsButtonContainer: {
    position: 'absolute',
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  projectDetailsButton: {
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
    zIndex: 2,
  },
  projectDetailsModalContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    gap: 20,
  },
  projectDetailsModalBackButtonContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  projectDetailsModalBackButton: {
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
  projectDetailsModalSubcontainer: {
    marginTop: 20,
  },
  projectDetailsModalButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    gap: 20,
  },
  projectDetailsHeader: {
    display: 'flex',
    paddingHorizontal: 20,
    paddingVertical: 125,
    gap: 40,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  projectDetailsHeading: {
    fontSize: 52,
    color: 'white',
  },
  projectDetailsSubHeading: {
    fontSize: 32,
    color: 'white',
  },
  projectDetailsParagraph: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  projectDetailsAddButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: -40,
  },
  projectDetailsAddButton: {
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
  projectDetailsTaskList: {
    display: 'flex',
    gap: 20,
    marginHorizontal: 20,
    marginTop: 40,
  },
  projectDetailsIconList: {
    height: 20,
    width: 20,
  },
  projectDetailsText: {
    fontSize: 20,
  },
});
