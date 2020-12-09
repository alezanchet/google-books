import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 115,
    width: '100%',
    backgroundColor: '#40BFFF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
  },

  responsiveContainer: {
    width: '90%',
    maxWidth: 1120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
