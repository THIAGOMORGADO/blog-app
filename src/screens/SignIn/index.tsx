 {/* Reafator para o arvide estilizacao todas as view que stiver estilizacao inline */}

import { 
  View, 
  Text, 
  KeyboardAvoidingView, 
  Platform, 
  TextInput, 
  ScrollView, 
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import {styles} from './styles';
import { FontAwesome6 } from '@expo/vector-icons'

import Header from '../../components/Header'
import Logo from '../../components/Logo';

import Button from '../../components/Button/Index';
import Icon from '../../components/Icon';
import { useNavigation } from '@react-navigation/native';
import Title from '../../components/Title';
import Input from '../../components/Input';

import {GoogleSignin} from '@react-native-google-signin/google-signin'

import auth from '@react-native-firebase/auth';
import AddNewAccounts from '../../components/Buttons';
import Buttons from '../../components/Buttons';

export default function SignIn() {
  const [pressIn, setPressIn] = useState(false);
  const navigation = useNavigation<any>()
  function goToHomePage() {
    navigation.navigate('Home')
  }

  // Configuracao google
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
      <Title style={[styles.title, {fontSize: 18}] } title="Blog dev" />
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
          style={[styles.input, {color: '#fff'}]}
          placeholder='Digite sua senha'
          placeholderTextColor="#00f000"
          secureTextEntry
        />

        {/* QUnado usuario clicar ele vai ter um efeito sppiner  */}
        <View style={{alignItems: 'center', justifyContent: 'center',}}>
          <Button onPress={handleLogin}>
          {
             pressIn ? 
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5,}}>
              <ActivityIndicator size='small' color='green'/>
            </View> :  
            <Text style={styles.btnText}>Login</Text>
          }
          </Button>
        </View>
      </View> 

      <View style={styles.socialArea}>
        <View style={styles.socialContent}>  
          <Icon iconName='google' size={30} color='#fff' />
          <Icon iconName='github' size={30} color='#fff' />
        </View>
      </View>    


      <View style={styles.footerContainer}> 
        <View style={styles.footerContent}>
          <Buttons title='Cadastra-se'/>
          <Buttons title='Esqueceu a senha'/>
        </View>
      </View>
     </ScrollView>
    </KeyboardAvoidingView>
  )
}