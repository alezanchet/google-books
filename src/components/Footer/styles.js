import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    position: 'fixed',
    backgroundColor: '#fff',
    bottom: 0,
    justifyContent: 'center',
  },

  contentContainer: {
    width: '60%',
    maxWidth: 550,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textButton: {
    marginLeft: 5,
  },
});
