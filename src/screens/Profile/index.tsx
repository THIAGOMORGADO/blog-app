import { FlatList, Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import Header from '../../components/Header';

import {GlobalStyles} from '../../globals/styles'
import Icon from '../../components/Icon';

import { styles } from './styles'
import React, { useState } from 'react';
import TechLIst from '../../components/TechLIst';
import ListEmpty from '../../components/ListEmpty';
import { useNavigation } from '@react-navigation/native';
import { useNameContext } from '../../contexts';

export default function Profile() {
  const navigation = useNavigation();
  const {name, stack}  = useNameContext();

  const [myskills, setMySkills] = useState<any[]>([])
  
  function handleBackScreen() {
    navigation.goBack()
  }
  function handleNewSkill() {
    setMySkills([...myskills, 
      {
      id: 2, 
      title: 'react', 
      image: 'https://imgs.search.brave.com/NkYJjH1ndaZFN9fTByXUFz6SK5VtCFLFgvF_MvcId_I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n'
    }
  ])
  }
  return (
  <>
  <View style={GlobalStyles.containerGlobal}>
    <Header>
      <Icon iconName="arrow-back-circle-outline" size={30} color='green' onPress={handleBackScreen}/>
      <Text style={GlobalStyles.title}>Profile</Text>
      <Icon iconName="log-out-outline" size={30} color='green'/>
     </Header>

    <View style={styles.userArea}>
        <View style={styles.userInfo}>
          <View style={styles.photoArea}>
            <Image 
              style={styles.userImage} 
              source={{uri: 'https://picsum.photos/200'}} 
              width={100}
              height={100}
            />
          </View>
          <Text style={styles.userText}>Dev: {name}  </Text>
          <Text style={styles.userText}>Stack: {stack}</Text>
        </View>
    </View>
    
    <View style={styles.skilsContainer}>
      <View style={styles.skilsArea}>
        <Text style={styles.title}>
          Minha habilidades
        </Text>   
          <Icon iconName="add-circle" size={30} color='#00f000' children={undefined} onPress={handleNewSkill} />
      </View>
      <View>  
        <FlatList
          ListEmptyComponent={<ListEmpty title='Você ainda não tem Skills cadastradas' subTitle='Cadastre suas skills no butao abaixo'/>}
          showsHorizontalScrollIndicator={false}
          data={myskills}
          horizontal
          keyExtractor={item => item.id}
          renderItem={({item}) =>{
            return <TechLIst title={item.title} image={item.image}/>
          } 
        }
        />
      </View>
    </View>
  </View>
  </>
    
  );
}