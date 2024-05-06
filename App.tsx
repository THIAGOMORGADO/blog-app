import React, { useEffect, useState } from 'react'
import { StatusBar, View } from 'react-native';

import {NavigationContainer}  from "@react-navigation/native";
import MainStack from "./src/Routes/MainStack";
import { GlobalStyles } from './src/globals/styles';

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
   
    <NavigationContainer theme={{
      colors: {
        background: '#333',
        primary: '',
        card: '',
        text: '',
        border: '',
        notification: ''
      },
      dark: true
    }}>
      <StatusBar barStyle={'light-content'} backgroundColor='#333' translucent/>
          {/* <MainStack /> */}
          <MainStack />
      </NavigationContainer>
    
  
  );
}

