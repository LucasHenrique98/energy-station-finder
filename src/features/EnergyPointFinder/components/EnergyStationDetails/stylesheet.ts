import { StyleSheet } from 'react-native';
import { PRIMARY } from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 180,
    width: '100%',
    borderRadius: 10,
    elevation: 10,
    zIndex: 1,
    // minHeight: 300,
  },
  infoWrapper: {
    backgroundColor: 'gray',
    paddingBottom: 5,
    padding: 10,
  },
  addressInfo: {
    overflow: 'hidden',
    paddingBottom: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  footer: {
    backgroundColor: '#FFF',
    padding: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: {
    width: 120,
    height: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: PRIMARY,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    marginRight: 5,
  },
  buttonIcon: {
    color: '#FFF',
  },
});
