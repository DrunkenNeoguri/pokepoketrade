import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  MainScreen,
  MyInfoScreen,
  RegisterScreen,
  SearchScreen,
  TradeScreen,
} from '../../screens';

const Tab = createBottomTabNavigator();

export function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="메인" component={MainScreen} />
      <Tab.Screen
        name="검색"
        component={SearchScreen}
        options={{headerShown: true}}
      />
      <Tab.Screen
        name="등록"
        component={RegisterScreen}
        options={{headerShown: true}}
      />

      <Tab.Screen
        name="트레이드"
        component={TradeScreen}
        options={{headerShown: true}}
      />
      <Tab.Screen
        name="내 정보"
        component={MyInfoScreen}
        options={{headerShown: true}}
      />
    </Tab.Navigator>
  );
}
