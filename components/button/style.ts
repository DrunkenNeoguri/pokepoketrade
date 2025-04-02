import {StyleSheet} from 'react-native';

export const buttonStyle = StyleSheet.create({
  basic: {
    paddingVertical: 9,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
  confirm: {
    backgroundColor: '#5881FF',
  },
  request: {
    backgroundColor: '#00D585',
  },
  cancel: {
    backgroundColor: '#FD9620',
  },
  disabled: {
    backgroundColor: '#6D7C93',
  },
  button: {
    backgroundColor: '#E3EDF6',
  },
  textBasic: {
    fontFamily: 'suite',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 600,
  },
  textBlack: {
    color: '#373737',
  },
  textWhite: {
    color: '#ffffff',
  },
});
