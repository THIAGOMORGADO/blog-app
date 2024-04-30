import { Text, View } from 'react-native';
import Header from '../../components/Header';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {styles} from '../../globals/styles'
import Icon from '../../components/Icon';

export default function Profile() {
 return (
    <View>
     <Header>
      <Text style={styles.title}>Profile</Text>

      <Icon iconName="logout" size={20} color='#fff'/>

     </Header>
    </View>
  );
}