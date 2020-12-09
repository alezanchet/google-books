import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },

  image: {
    marginTop: 170,
    height: 200,
    width: 200,
  },

  descriptionContainer: {
    backgroundColor: '#fff',
    width: '90%',
    maxWidth: 500,
    padding: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginTop: 30,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  date: {
    fontSize: 14,
  },
});
