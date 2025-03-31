import {Pressable, Text, View} from 'react-native';
import {tradeItemStyle} from './style';
import {Badge} from '../badge';

interface Props {
  id: string;
  title: string;
  card1: string;
  card2: string;
}

export function TradeItem(props: Props) {
  return (
    <Pressable id={props.id} style={tradeItemStyle.basic}>
      <View style={tradeItemStyle.titleBox}>
        <Text style={tradeItemStyle.title}>{props.title}</Text>
        <Badge type="교환" />
      </View>
      <View style={tradeItemStyle.tradeInfoBox}>
        <Badge type="나" />
        <Text style={tradeItemStyle.tradeItemText}>{props.card1}</Text>
      </View>
      <View style={tradeItemStyle.tradeInfoBox}>
        <Badge type="당신" />
        <Text style={tradeItemStyle.tradeItemText}>{props.card2}</Text>
      </View>
    </Pressable>
  );
}
