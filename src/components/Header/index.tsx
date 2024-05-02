import { Text, Touchable, TouchableOpacity, View, SafeAreaView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { AntDesign  } from '@expo/vector-icons'

import {styles} from './styles'
import { ReactNode, useState } from 'react';

type HeaderProps = {
  children: ReactNode;
}

import {useNavigation} from '@react-navigation/native'
export default function Header({children}: HeaderProps) {
  const [active, setActive] = useState(true)
 return (
  <KeyboardAvoidingView style={styles.headerContainer}>
   {children} 
  </KeyboardAvoidingView>
  );
}