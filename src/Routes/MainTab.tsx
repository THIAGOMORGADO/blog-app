import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Home from "../screens/Home";
import Icon from "../components/Icon";
import Jobs from "../screens/Jobs/Index";




const Tabs = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel:false,
        tabBarActiveTintColor: '#121212',
        tabBarStyle: {
          backgroundColor: '#333',
          borderTopWidth: 0
        }
      }}
    >
      <Tabs.Screen 
      name="Home" 
      component={Home} 
      options={{
        tabBarIcon: ({focused}) => {
          if(focused) {
            return <Icon iconName="home" color="green" size={20}/>
          }
          return <Icon iconName='home' color='#222' size={20}/>
        }
      }}
      />
      <Tabs.Screen 
      name="Jobs" 
      component={Jobs} 
      options={{
        tabBarIcon: ({ focused}) => {
          if(focused) {
            return <Icon iconName='bag-sharp' color="green" size={20}/>
          }
          return <Icon iconName='bag-outline' color="green" size={20}/>
        }
      }}
      />
     
    </Tabs.Navigator>
  );
}