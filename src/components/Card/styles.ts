import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
  },
  cardSubcontainer: {
    width: '100%',
    display: 'flex',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    gap: 40,
  },
  cardHeading: {
    fontSize: 52,
    color: 'white',
  },
  cardSubHeading: {
    fontSize: 32,
    color: 'white',
  },
  cardParagraph: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  cardButtonContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  cardAddButton: {
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
});
