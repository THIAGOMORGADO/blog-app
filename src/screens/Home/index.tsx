import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native'

import {styles}  from '../../globals/styles'
import Icon from '../../components/Icon';

export default function Home() {
  const [logead, setLogead] = useState(false);
  const navigation = useNavigation();

  function handleProfileScreen() {
    navigation.navigate('user')
  }
  return(
    <View>
      <Header>
        {/* <Icon 
          iconName="left" 
          size={20} 
          color='#fff'
          onPress={alert('toaqui')}
        /> */}
        <Text style={styles.title}>Home</Text>

       
        <Icon iconName="user" size={20} color='#fff' onPress={handleProfileScreen}/> 
        


      </Header>
    </View>
  )
}