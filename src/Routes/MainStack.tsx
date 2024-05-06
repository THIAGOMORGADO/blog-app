import {createNativeStackNavigator} from '@react-navigation/native-stack'


// Screens
import  Home  from '../screens/Home';
import ForgottenPassword from '../screens/ForgotenPassword';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Profile from '../screens/Profile';
import Sucess from '../screens/ForgotenPassword/Sucess';
import MainTabs from './MainTab';
import resumePlan from '../screens/Checkout/ResumePlan';


const Stack = createNativeStackNavigator();

export default function MainStack() {
  return(
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={MainTabs} />
      <Stack.Screen name="ForgottenPassword" component={ForgottenPassword} />
      <Stack.Screen name="success" component={Sucess} />
      <Stack.Screen name="Login" component={SignIn} />
      <Stack.Screen name="criarConta" component={SignUp} />
      <Stack.Screen name="User" component={Profile} />


      {/* Rotaas checkout  */}
      <Stack.Screen name="resume" component={resumePlan} />
    </Stack.Navigator>
  )
}