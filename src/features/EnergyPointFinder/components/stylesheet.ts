import { StyleSheet } from 'react-native';
import { PRIMARY } from '../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 100,
    zIndex: 1,
  },
  commonTextInputStyle: {
    fontSize: 16,
    marginLeft: 5,
  },
  textInput: {
    height: '100%',
    padding: 0,
  },
  searchIcon: {
    color: PRIMARY,
  },
  closeIcon: {
    color: '#0009',
    height: '100%',
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
