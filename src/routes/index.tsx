import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Account from '../screens/Account';
import AddVehicle from '../screens/AddVehicle';
import Chat from '../screens/Chat';
import Home from '../screens/Home';
import Search from '../screens/Search';
import SingIn from '../screens/SingIn';
import SingUp from '../screens/SingUp';
import Vehicle from '../screens/vehicle';
import theme from '../theme';

const {Screen, Navigator} = createNativeStackNavigator();

export function Routes(){
  return(
    <NavigationContainer>
      <Navigator initialRouteName="home">
        <Screen name='home' component={Home} options={{headerShown: false}} />

        <Screen name='search' component={Search} options={{headerShown: false}} />

        <Screen name='chat' component={Chat} options={{headerShown: false}} />

        <Screen name='singup' component={SingUp} options={{
        title: 'Register',
        
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: theme.LIGTH.Back,
        },
        headerTitleStyle:{
          fontFamily: 'Roboto_700Bold'
        }
      }} />

        <Screen name='singin' component={SingIn} options={{
        title: 'Log In',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: theme.LIGTH.Back,
        },
        headerTitleStyle:{
          fontFamily: 'Roboto_700Bold'
        }
      }} />
      
        <Screen name='account' component={Account} options={{headerShown: false}} />
        <Screen name='addvehicle' component={AddVehicle} options={{
        title: 'Vehicle',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: theme.LIGTH.Back,
        },
        headerTitleStyle:{
          fontFamily: 'Roboto_700Bold'
        }
      }}  />

        <Screen name='vehicle' component={Vehicle} options={{
        title: 'Vehicle',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: theme.LIGTH.Back,
        },
        headerTitleStyle:{
          fontFamily: 'Roboto_700Bold'
        }
      }}  />
      </Navigator>
    </NavigationContainer>
  )
}
