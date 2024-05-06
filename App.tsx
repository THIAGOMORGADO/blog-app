import React, { useEffect, useState } from 'react'
import { StatusBar} from 'react-native';

import {NavigationContainer}  from "@react-navigation/native";
import MainStack from "./src/Routes/MainStack";
import SplashScreen  from './src/components/SplashScreen';


export default function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 2000)
   
  }, [loading])

  if (!loading) {
    return <SplashScreen />
  }

  return (
   
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor='#333' />
        
          <MainStack />
        
      </NavigationContainer>
    
  
  );
}

