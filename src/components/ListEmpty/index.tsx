import { Text, View } from 'react-native';
import {styles} from './styles'
import Icon from '../Icon';
import Button from '../Button/Index';

export default function ListEmpty() {
 return (
  
    <View style={styles.emptyAre}>
      <View style={styles.content}>
        <Icon iconName='codepen' size={35} color='#00f000'/>
        <Text style={styles.title}>Você ainda não tem Skills cadastradas</Text>
        <Text style={styles.subTitle}>Cadastre suas skills no butao abaixo</Text>

        
      </View>
    </View>

  );
}