import {TextInput, TextInputProps} from 'react-native';
import {inputStyle} from './style';
import {useState} from 'react';

interface Props extends TextInputProps {}

export function Input(props: Props) {
  const [input, setInput] = useState<string>('');

  const onChangeText = (text: string) => {
    setInput(text);
  };

  return (
    <TextInput
      value={input}
      onChangeText={onChangeText}
      style={[inputStyle.basic]}
      {...props}
    />
  );
}
