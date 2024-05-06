import React from 'react';
import { Text, Touchable, TouchableOpacity, View } from 'react-native';

 import { styles } from './styles';

type FooterButtonProps = {
  title: string;
}

const Buttons = ({title} : FooterButtonProps) => {
  return(
    <TouchableOpacity>
      <Text  style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Buttons;