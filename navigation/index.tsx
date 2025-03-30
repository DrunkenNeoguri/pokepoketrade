import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTab} from '../components';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={BottomTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
