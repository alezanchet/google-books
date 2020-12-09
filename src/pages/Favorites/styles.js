import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },

  listContainer: {
    marginTop: 190,
    justifyContent: 'center',
    width: '100%',
    maxWidth: 1120,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 100,
  },

  item: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 5,
    width: '40%',
    maxWidth: 200,
    backgroundColor: '#fff',
    marginTop: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
  },

  hoveredView: {
    height: '100%',
    width: '100%',
    backgroundColor: '#00000066',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textItem: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
});
