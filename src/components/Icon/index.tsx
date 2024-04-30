import { Touchable, TouchableOpacity, View } from 'react-native';

import {AntDesign} from '@expo/vector-icons'

type IconProps = {
  iconName: any;
  size: number;
  color: string;
  onPress?: () => void;
}

export default function Icon({ iconName, size, color, onPress }: IconProps) {
 return (

  <TouchableOpacity>
    <AntDesign 
      name={iconName}
      size={size}
      color={color}
      onPress={onPress}
   />
  </TouchableOpacity>
   
  );
}