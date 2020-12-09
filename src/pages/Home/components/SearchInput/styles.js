import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 8,
    maxWidth: 550,
    position: 'fixed',
    top: 125,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
  },

  icon: {
    marginHorizontal: 10,
  },

  input: {
    flex: 1,
    fontSize: 14,
  },

  button: {
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
