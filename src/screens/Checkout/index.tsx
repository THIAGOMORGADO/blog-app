import { Text, View } from 'react-native';
import { styles } from './styles';
import Icon from '../../components/Icon';
import Title from '../../components/Title';
import Button from '../../components/Button/Index';
import Buttons from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';

export default function Checkout() {
  const navigation = useNavigation<any>();


  function handleNextStep(): void {
    navigation.navigate('resume');
  }

 return (
   <View style={styles.container}>
    <View style={styles.content}>
      <Icon iconName='close-circle-sharp' color='green' size={50} />
      <Title style={styles.textCheck} title="Adiquira ja seu plano pro para ter acesso as vagas na area de dev..." />
      
      <Buttons 
        title='Adicionar o pagamento' 
        iconName='card' 
        size={30} 
        color='green'
        style={styles.btnCard}
        onPress={handleNextStep}
      />
      
    
    </View>
   
    
    
    
  
   </View>
  );
}