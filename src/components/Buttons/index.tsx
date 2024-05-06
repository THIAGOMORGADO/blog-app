import React from 'react';
import { Text, Touchable, TouchableOpacity, View } from 'react-native';

 import { styles } from './styles';

type FooterButtonProps = {
  title: string;
  onPress: () => void;
}

const Buttons = ({title, onPress} : FooterButtonProps) => {
  return(
    <TouchableOpacity onPress={onPress}>
      <Text  style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Buttons;