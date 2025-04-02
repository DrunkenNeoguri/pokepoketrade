import {StyleSheet} from 'react-native';

export const tradeItemStyle = StyleSheet.create({
  basic: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    display: 'flex',
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
    gap: 6,
    width: '100%',
  },
  titleBox: {
    display: 'flex',
    flexDirection: 'row',
    boxSizing: 'border-box',
    marginBottom: 4,
    width: '100%',
  },
  title: {
    fontFamily: 'suite',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 700,
    color: '#373737',
    marginRight: 'auto',
  },
  tradeInfoBox: {
    display: 'flex',
    flexDirection: 'row',
    boxSizing: 'border-box',
    justifyContent: 'flex-start',
    gap: 8,
  },
  tradeItemText: {
    fontFamily: 'suite',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 400,
    color: '#373737',
  },
});
