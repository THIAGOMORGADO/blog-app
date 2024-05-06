import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function ForgottenPassword() {
  const navigatio = useNavigation();
  return (
    <View style={{backgroundColor: 'blue'}}>
      <Text style={{color: "red"}}>ForgottenPassword</Text>
      <Button onPress={() => navigatio.navigate('success')} title='Fazer Login'/>
    </View>
  )
}