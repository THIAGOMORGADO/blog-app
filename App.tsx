import React from 'react'
import { StatusBar, View } from 'react-native';

import {NavigationContainer}  from "@react-navigation/native";
import MainStack from "./src/Routes/MainStack";
import { GlobalStyles } from './src/globals/styles';



export default function App() {
  return (
    <NavigationContainer>
      
        <StatusBar barStyle={'light-content'} backgroundColor="#333"/>
        <MainStack />
      
    </NavigationContainer>
  );
}

