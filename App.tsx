import React from 'react'
import { StatusBar, View } from 'react-native';

import {NavigationContainer}  from "@react-navigation/native";
import MainStack from "./src/Routes/MainStack";
import { GlobalStyles } from './src/globals/styles';



export default function App() {
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
      <StatusBar barStyle={'light-content'} />
          <MainStack />
      </NavigationContainer>
    
  
  );
}

