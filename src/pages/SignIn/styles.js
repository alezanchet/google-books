import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundIcon: {
    position: 'absolute',
    top: '10%',
    alignSelf: 'center',
    marginRight: '30%',
  },

  viewContent: {
    width: '90%',
    maxWidth: 375,
    height: '100%',
    maxHeight: 650,
    justifyContent: 'space-between',
  },

  titleLogo: {
    color: '#f2f2f2',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },

  subtitleLogo: {
    color: '#f2f2f2',
    fontSize: 16,
  },

  phrase: {
    fontSize: 40,
    color: '#f2f2f2',
    fontWeight: 'bold',
  },

  button: {
    height: 50,
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textButton: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  iconButton: {
    position: 'absolute',
    right: 10,
  },
});
