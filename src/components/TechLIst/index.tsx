import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';

type listProps = {
  title?: string,
  image?: string,

}

const TechList = ({title, image}: listProps) => {

  //
  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={{uri: image}} style={styles.techIm}/>
        <Text style={styles.textTech}>{title}</Text>
      </View>
    </View>
  )
}

export default TechList;