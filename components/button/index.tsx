import {Pressable, PressableProps, Text} from 'react-native';
import {buttonStyle} from './style';

interface Props extends PressableProps {
  type?: 'button' | 'confirm' | 'request' | 'cancel' | 'disabled';
  children?: React.ReactNode;
}

export function Button({type = 'button', onPress, children}: Props) {
  return (
    <Pressable style={[buttonStyle.basic, buttonStyle[type]]} onPress={onPress}>
      <Text
        style={[
          buttonStyle.textBasic,
          buttonStyle[type === 'button' ? 'textBlack' : 'textWhite'],
        ]}>
        {children}
      </Text>
    </Pressable>
  );
}
