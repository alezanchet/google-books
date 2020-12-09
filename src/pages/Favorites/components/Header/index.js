import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

const Header = () => (
  <View style={styles.container}>
    <View style={styles.responsiveContainer}>
      <Text style={styles.title}>Meus Favoritos</Text>
    </View>
  </View>
);

export default Header;
