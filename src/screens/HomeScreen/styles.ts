import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  homeContainer: {
    marginHorizontal: 20,
    marginVertical: 40,
  },
  homeSubcontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  homeMenuButton: {
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
  homeModalContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    gap: 20,
  },
  homeModalBackButtonContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  homeModalBackButton: {
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
  homeParagraph: {
    fontSize: 20,
  },
  homeModalSubcontainer: {
    marginTop: 20,
  },
  homeModalButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    gap: 20,
  },
  homeProjectEmpty: {
    display: 'flex',
    height: 550,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  homeProject: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    gap: 40,
  },
  homeProjectInner: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  homeHeading: {
    fontSize: 48,
  },
  homeButtonContainer: {
    width: '100%',
    backgroundColor: 'black',
  },
  homeButtonText: {
    color: 'white',
  },
});
