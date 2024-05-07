import React, { useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native'

import {GlobalStyles}  from '../../globals/styles'
import Icon from '../../components/Icon';
import Title from '../../components/Title';
import { styles } from './styles';
import NewLetter from '../../components/NewLetter';
import ListEmpty from '../../components/ListEmpty';

import { useNameContext } from '../../contexts/';

export default function Home() {
  const [logead, setLogead] = useState(false);
  const navigation = useNavigation<any>();
  const [newLetter, setNewLetter] = useState<any>([
    {
      id: 1,
      image: 'https://imgs.search.brave.com/NkYJjH1ndaZFN9fTByXUFz6SK5VtCFLFgvF_MvcId_I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n',
      title: 'Full Stack',
    },
    {
      id: 1,
      image: 'https://imgs.search.brave.com/NkYJjH1ndaZFN9fTByXUFz6SK5VtCFLFgvF_MvcId_I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n',
      title: 'Full Stack',
    },
    {
      id: 1,
      image: 'https://imgs.search.brave.com/NkYJjH1ndaZFN9fTByXUFz6SK5VtCFLFgvF_MvcId_I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n',
      title: 'Full Stack',
    },
    {
      id: 1,
      image: 'https://imgs.search.brave.com/NkYJjH1ndaZFN9fTByXUFz6SK5VtCFLFgvF_MvcId_I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n',
      title: 'Full Stack',
    },
  ]);
  
  const {  name } = useNameContext();

  console.log(name)

  function handleProfileScreen() {
    navigation.navigate('User')
  }
  return(
    <View style={styles.homeContainer}>
      <Header>
        <Title title='Home' style={styles.title}/>
        <Icon iconName="person-circle" size={24} color="green" onPress={handleProfileScreen}/>
      </Header>
      <View style={styles.homeContent}>
       
          <Title title='Adiconado recentement' />
          
            <FlatList 
              horizontal
              ListEmptyComponent={<ListEmpty title='Ainda nao tem novidades no app'/>}
              showsHorizontalScrollIndicator={false}
              
              data={newLetter}
              keyExtractor={item => item.id}
              renderItem={
              ({item}) =>{
                return <NewLetter title={item.title} image={item.image} description=''/>
              }
            }
            />
      </View>
      <View style={styles.postContent}>
          
      </View>
      
      
    </View>
  )
}