import { 
  View, 
  Text, 
  KeyboardAvoidingView, 
  Platform, 
  TextInput, 
  ScrollView, 
  ActivityIndicator 
} from 'react-native'
import React, { useState } from 'react'
import {styles} from './styles';


import Header from '../../components/Header'
import Logo from '../../components/Logo';

import Button from '../../components/Button/Index';
import Icon from '../../components/Icon';
import { useNavigation } from '@react-navigation/native';
import Title from '../../components/Title';
import Input from '../../components/Input';

export default function SignIn() {
  const [pressIn, setPressIn] = useState(false);
  const navigation = useNavigation<any>()
  function goToHomePage() {
    navigation.navigate('home')
  }

  const handleLogin = () => {
    setPressIn(true);
    setTimeout(() => {
      setPressIn(false);
      goToHomePage()
    }, 2000);
    
  }
 
  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <Logo />
        <Title 
          style={[styles.title, {fontSize: 18}] }
          title="Blog dev"  
        />
     <ScrollView 
      style={styles.formArea}
      contentContainerStyle={{width: '100%',}}
     >
      <View style={styles.formContent}>
        <Title 
          style={styles.title}
          title="E-mail"  
        />
        <Input 
           placeholder='Digite sua senha'
           placeholderTextColor="#00f000"
        /> 
        <Title 
          style={styles.title}
          title="Senha"  
        />
        <Input 
          placeholder='Digite sua senha'
          placeholderTextColor="#00f000"
        />

        {/* QUnado usuario clicar ele vai ter um efeito sppiner  */}
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Button onPress={handleLogin}>
          {
             pressIn ? 
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <ActivityIndicator size='small' color='#00f000' />
                
              <Text style={styles.btnText}>Logando</Text>
            </View> :  
            <Text style={styles.btnText}>Login</Text>
          }
          </Button>
        </View>


        <View style={{ padding: 10, alignItems: 'center', }}>
          <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>Entra com </Text>
          
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 30}}>
          <Icon iconName='google' size={30} color='#fff' onPress={() => {}}/>
          <Icon iconName="apple1" size={30} color="#fff" />
        </View>
      </View> 

      <View style={{flexDirection: 'row', gap: 10,  padding: 50, alignContent: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#fff', fontSize: 18, fontWeight:'bold'}}>Cadastra-se</Text>
        <Text style={{color: '#fff', fontSize: 18, fontWeight:'bold'}}>Esqueceu a senha</Text>
      </View>
      
     </ScrollView>
    </KeyboardAvoidingView>
  )
}