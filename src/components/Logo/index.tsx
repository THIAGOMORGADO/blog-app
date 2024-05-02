import { Image, View } from 'react-native';
import { styles } from '../SplashScreen/styles';


export default function Logo() {
 return (
   <Image source={require('../../assets/pl.png')} style={styles.imgLogo}/>
  );
}