import {createNativeStackNavigator} from '@react-navigation/native-stack'


// Screens
import  Home  from '../screens/Home';
import ForgottenPassword from '../screens/ForgotenPassword';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Profile from '../screens/Profile';


const Stack = createNativeStackNavigator();

export default function MainStack() {
  return(
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ForgottenPassword" component={ForgottenPassword} />
      <Stack.Screen name="Login" component={SignIn} />
      <Stack.Screen name="criarConta" component={SignUp} />
      <Stack.Screen name="user" component={Profile} />
    </Stack.Navigator>
  )
}