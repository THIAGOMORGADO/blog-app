import { ActivityIndicator, Image, Text, View } from 'react-native';

import { styles } from './styles'
import Logo from '../Logo';

export default function SplashScreen() {
 return (
   <View style={styles.container}>
   <Logo />
    <Text style={styles.title}>
      Blog Dev
    </Text>
    <Text style={styles.subtitle}>
      A simple blog app
    </Text>
    <ActivityIndicator size='large' color="#00f000" />
   </View>
  );
}