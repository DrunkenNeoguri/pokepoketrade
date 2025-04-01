import {Pressable, Text} from 'react-native';
import {chipStyle} from './style';
import {CloseIcon} from '../../assets/svgs';

interface Props {
  name: string;
  owner: 'user' | 'opponent';
}

export function Chip({name, owner}: Props) {
  return (
    <Pressable
      style={[
        chipStyle.basic,
        owner === 'user' ? chipStyle.userBg : chipStyle.opponentBg,
      ]}
      onPress={() => {}}>
      <Text style={chipStyle.text}>{name}</Text>
      <CloseIcon
        width={18}
        height={18}
        color={owner === 'user' ? '#9C91F9' : '#6D7C93'}
      />
    </Pressable>
  );
}
