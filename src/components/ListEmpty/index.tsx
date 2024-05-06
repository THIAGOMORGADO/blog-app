import { Text, View } from 'react-native';
import {styles} from './styles'
import Icon from '../Icon';
import Button from '../Button/Index';

type ListEmptyProps = {
  title: string,
  subTitle?: string,
}

export default function ListEmpty({title, subTitle} : ListEmptyProps) {
 return (
  
    <View style={styles.emptyAre}>
      <View style={styles.content}>
        <Icon iconName='alert-circle-outline' size={35} color='#00f000'/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>

  );
}