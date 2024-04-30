import { ReactNode } from 'react';
import { Text, View, TextProps} from 'react-native';


type TitleProps = {
  title: String;
 
}

export default function Title({ title, ...rest} : TitleProps) {
 return (
    <Text name={title} {...rest}/>
  );
}