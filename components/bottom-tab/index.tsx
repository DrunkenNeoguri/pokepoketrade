import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  MainScreen,
  MyInfoScreen,
  RegisterScreen,
  SearchScreen,
  TradeScreen,
} from '../../screens';
import {
  ListIcon,
  MyInfoIcon,
  RegisterIcon,
  SearchIcon,
  TradeIcon,
} from '../../assets/svgs';
import {Header} from '../header';

const Tab = createBottomTabNavigator();

export function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="메인"
        component={MainScreen}
        options={{
          headerShown: true,
          header: props => <Header isMainHeader {...props} />,
          tabBarIcon: () => <ListIcon />,
        }}
      />
      <Tab.Screen
        name="검색"
        component={SearchScreen}
        options={{
          headerShown: true,
          header: props => <Header title="검색" {...props} />,
          tabBarIcon: () => <SearchIcon />,
        }}
      />
      <Tab.Screen
        name="등록"
        component={RegisterScreen}
        options={{
          headerShown: true,
          header: props => <Header title="등록" {...props} />,
          tabBarIcon: () => <RegisterIcon />,
        }}
      />

      <Tab.Screen
        name="트레이드"
        component={TradeScreen}
        options={{
          headerShown: true,
          header: props => <Header title="트레이드" {...props} />,
          tabBarIcon: () => <TradeIcon />,
        }}
      />
      <Tab.Screen
        name="내 정보"
        component={MyInfoScreen}
        options={{
          headerShown: true,
          header: props => <Header title="내 정보" {...props} />,
          tabBarIcon: () => <MyInfoIcon />,
        }}
      />
    </Tab.Navigator>
  );
}
