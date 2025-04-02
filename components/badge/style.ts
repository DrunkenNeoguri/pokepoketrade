import {StyleSheet} from 'react-native';

export const badgeStyle = StyleSheet.create({
  basic: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    fontFamily: 'suite',
    fontSize: 8,
    lineHeight: 10,
    fontWeight: 500,
    margin: 'auto',
  },
  ['나눔']: {
    borderWidth: 1,
    borderColor: '#00D585',
    backgroundColor: '#ffffff',
    color: '#00D585',
  },
  ['교환']: {
    borderWidth: 1,
    borderColor: '#FD9620',
    backgroundColor: '#ffffff',
    color: '#FD9620',
  },

  ['나']: {
    backgroundColor: '#5881FF',
    color: '#ffffff',
  },

  ['당신']: {
    backgroundColor: '#FD5750',
    color: '#ffffff',
  },
});
