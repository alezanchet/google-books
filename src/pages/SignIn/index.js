import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

const SignIn = () => (
  <View style={styles.container}>
    <Entypo
      style={styles.backgroundIcon}
      name="open-book"
      size={350}
      color="#ffffff1a"
    />
    <View style={styles.viewContent}>
      <View>
        <Entypo name="open-book" size={40} color="#f2f2f2" />
        <Text style={styles.titleLogo}>Livros</Text>
        <Text style={styles.subtitleLogo}>Procure um livro</Text>
      </View>
      <Text style={styles.phrase}>A verdade{'\n'}está escrita.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Entrar no Livros</Text>
        <AntDesign name="arrowright" size={24} color="#0d0d0d" />
      </TouchableOpacity>
    </View>
  </View>
);

export default SignIn;
