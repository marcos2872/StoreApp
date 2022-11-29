import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Account from '../screens/Account';
import Chat from '../screens/Chat';
import Home from '../screens/Home';
import Search from '../screens/Search';
import SingIn from '../screens/SingIn';
import SingUp from '../screens/SingUp';
import theme from '../theme';

const {Screen, Navigator} = createNativeStackNavigator();

export function StackRouter() {
  return (
   <Navigator>
    <Screen name='home' component={Home} />
    <Screen name='singup' component={SingUp} />
   </Navigator>

  )
}
