import React from 'react';
import { StyleProp, Text, Touchable, TouchableOpacity, View, ViewStyle } from 'react-native';

 import { styles } from './styles';
import Icon from '../Icon';

type FooterButtonProps = {
  title: string;
  onPress: () => void;
  iconName: string;
  color: string;
  size: number;
  style?: StyleProp<ViewStyle>;
}

const Buttons = ({title, onPress, iconName, color, size, style} : FooterButtonProps) => {
  return(
    <TouchableOpacity onPress={onPress} style={style}>
      <Icon iconName={iconName} color={color} size={size} />
      <Text  style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Buttons;