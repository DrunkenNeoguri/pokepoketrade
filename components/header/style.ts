import {StyleSheet} from 'react-native';

export const MainStyle = StyleSheet.create({
  basic: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
  },
  main: {
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'suite',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 800,
    color: '#000000',
  },
});
