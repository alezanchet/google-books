import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    backgroundColor: '#40BFFF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
  },

  responsiveContainer: {
    width: '90%',
    maxWidth: 1120,
  },

  contentContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 16,
    color: '#fff',
  },
});
