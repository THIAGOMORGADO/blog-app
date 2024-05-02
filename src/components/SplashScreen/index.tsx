import { ActivityIndicator, Image, Text, View } from 'react-native';

import { styles } from './styles'

export default function SplashScreen() {
 return (
   <View style={styles.container}>
    <Image source={require('../../assets/pl.png')} style={styles.imgLogo}/>
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