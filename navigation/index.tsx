import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen, RegisterScreen, TradeScreen} from '../screens';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{title: 'Main'}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: 'Register'}}
      />
      <Stack.Screen
        name="Trade"
        component={TradeScreen}
        options={{title: 'Trade'}}
      />
      <Stack.Screen
        name="Search"
        component={TradeScreen}
        options={{title: 'Search'}}
      />
    </Stack.Navigator>
  );
}
