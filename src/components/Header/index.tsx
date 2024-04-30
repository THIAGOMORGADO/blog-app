import { Text, Touchable, TouchableOpacity, View } from 'react-native';
import { AntDesign  } from '@expo/vector-icons'

import {styles} from './styles'
import { useState } from 'react';

export default function Header() {
  const [active, setActive] = useState(false)
 return (
  <View style={styles.headerContainer}>
  <TouchableOpacity>
   <AntDesign name="left" size={24} color="#fff" />
  </TouchableOpacity> 
   
    <Text style={styles.titleHeader}>Header</Text>

    { active 
    ? <TouchableOpacity>
        <AntDesign name="user" size={24} color="#fff" /> 
      </TouchableOpacity>
      
    : <TouchableOpacity>
        <AntDesign name="login" size={24} color="#fff" />
      </TouchableOpacity>
    }
    
  </View>
  );
}