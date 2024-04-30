import React from 'react'
import { StatusBar } from 'react-native';

import {NavigationContainer}  from "@react-navigation/native";
import MainStack from "./src/Routes/MainStack";



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor="#333"/>
      <MainStack />
    </NavigationContainer>
  );
}

