import {Text} from 'react-native';
import {badgeStyle} from './style';

interface Props {
  type: '나눔' | '교환' | '나' | '당신';
}

export function Badge({type}: Props) {
  return <Text style={[badgeStyle.basic, badgeStyle[type]]}>{type}</Text>;
}
