import { Image, Text, View } from 'react-native';
import { styles } from './styles';


type NelatterProps  = {
  title: string;
  description: string;
  image?: string;
}

export default function NewLetter({title, description, image} : NelatterProps) {
 return (
   <View style={styles.container}>
    <View style={styles.listContent}>
      <Image source={{uri: image}} style={styles.newLatterImg}/>
      <Text style={styles.newLatterText}>{title}</Text>
    </View>
   </View>
  );
}