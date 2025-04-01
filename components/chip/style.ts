import {StyleSheet} from 'react-native';

export const chipStyle = StyleSheet.create({
  basic: {
    paddingVertical: 3,
    paddingRight: 3,
    paddingLeft: 8,
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    gap: 8,
  },
  userBg: {
    backgroundColor: '#9C91F9',
  },
  opponentBg: {
    backgroundColor: '#6D7C93',
  },
  text: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 500,
    color: '#ffffff',
  },
});
