import { AccessibilityInfo, ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

import {styles} from './styles'
import { ReactNode, useState } from 'react';

type buttonProps = {
  onPress?: () => void;
  children: ReactNode;
  style?: any;
}

export default function Button({ children, onPress,  } : buttonProps) {
 
 return (
  <TouchableOpacity style={styles.container} onPress={onPress}>
   {children}
  </TouchableOpacity>
  );
}