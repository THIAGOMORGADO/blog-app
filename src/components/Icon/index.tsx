import { Touchable, TouchableOpacity, View } from 'react-native';

import {Ionicons} from '@expo/vector-icons'
import { ReactNode } from 'react';

type IconProps = {
  iconName: any;
  size: number;
  color: string;
  onPress?: () => void;
  styles?: any;
  children?: ReactNode;
}

export default function Icon({ iconName, size, color, onPress, styles, children }: IconProps) {
 return (

  <TouchableOpacity >
    <Ionicons 
      name={iconName}
      size={size}
      color={color}
      onPress={onPress}
      styles={styles}
   />
   {children}
  </TouchableOpacity>
   
  );
}