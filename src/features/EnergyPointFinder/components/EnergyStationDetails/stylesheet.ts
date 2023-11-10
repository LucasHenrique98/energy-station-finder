import { StyleSheet } from 'react-native';
import { PRIMARY } from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 180,
    left: 10,
    right: 10,
    zIndex: 1,
  },
  wrapper: {
    position: 'relative',
  },
  innerContent: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 20,
  },
  closeIcon: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: -50,
  },
  infoWrapper: {
    backgroundColor: '#e9e9e9',
    paddingBottom: 5,
    padding: 10,
  },
  addressInfo: {
    overflow: 'hidden',
    paddingBottom: 10,
  },
  addressText: {
    color: '#000',
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
