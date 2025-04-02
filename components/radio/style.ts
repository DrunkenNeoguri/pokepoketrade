import {StyleSheet} from 'react-native';

export const radioStyle = StyleSheet.create({
  basic: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  border: {
    paddingVertical: 1,
    paddingHorizontal: 1,
    borderRadius: 9999,
    boxSizing: 'border-box',
    borderWidth: 1,
    borderColor: '#373737',
    backgroundColor: '#ffffff',
    width: 12,
    height: 12,
  },
  selected: {
    width: 8,
    height: 8,
    borderRadius: 9999,
    backgroundColor: '#5881FF',
  },
  unselected: {
    borderRadius: 9999,
    backgroundColor: '#ffffff',
  },
  label: {
    fontFamily: 'suite',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 400,
    color: '#373737',
  },
});
