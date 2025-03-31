import {Pressable, Text, View} from 'react-native';
import {radioStyle} from './style';

interface Props {
  id: string;
  isSelected: boolean;
  onPress?: (id: string) => void;
  children?: React.ReactNode;
}

export function Radio({id, isSelected, onPress, children}: Props) {
  return (
    <Pressable id={id} onPress={() => {}} style={radioStyle.basic}>
      <View style={radioStyle.border}>
        <View
          style={isSelected ? radioStyle.selected : radioStyle.unselected}
        />
      </View>
      <Text style={radioStyle.label}>{children}</Text>
    </Pressable>
  );
}
