import React from 'react';
import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { styles } from './styles';

const Header = () => (
  <View style={styles.container}>
    <View style={styles.responsiveContainer}>
      <View style={styles.contentContainer}>
        <Entypo
          style={{ marginRight: 10 }}
          name="open-book"
          size={40}
          color="white"
        />
        <View>
          <Text style={styles.title}>Livros</Text>
          <Text style={styles.subtitle}>Procure um livro</Text>
        </View>
      </View>
    </View>
  </View>
);

export default Header;
