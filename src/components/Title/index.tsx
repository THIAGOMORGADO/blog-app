import { ReactNode } from 'react';
import { Text, View, TextProps, TextStyle} from 'react-native';

import {styles} from './styles'


type TitleProps = {
  title: String;
  style?: TextStyle | TextStyle[];
 
}

export default function Title({ title, style, ...rest} : TitleProps) {
 return (
    <Text style={[styles.title, style]}>{title}</Text>
  );
}