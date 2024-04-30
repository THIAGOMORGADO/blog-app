import {createNativeStackNavigator} from '@react-navigation/native-stack'


// Screens
import  Home  from '../screens/Home';


const Stack = createNativeStackNavigator();

export default function MainStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      
    </Stack.Navigator>
  )
}