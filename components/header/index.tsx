import {Pressable, Text, View} from 'react-native';
import {SearchIcon} from '../../assets/svgs';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {MainStyle} from './style';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../types/navigation';

interface Props extends BottomTabHeaderProps {
  title?: string;
  isMainHeader?: boolean;
}

export function Header(props: Props) {
  const {title, isMainHeader = false} = props;
  const navigation = useNavigation<Navigation>();

  return isMainHeader ? (
    <View style={[MainStyle.basic, MainStyle.main]}>
      <Text style={MainStyle.title}>PokePokeTrade</Text>
      <Pressable onPress={() => navigation.navigate('검색')}>
        <SearchIcon />
      </Pressable>
    </View>
  ) : (
    <View style={MainStyle.basic}>
      <Text style={MainStyle.title}>{title}</Text>
    </View>
  );
}
