import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

const Header = ({ isFavorite, toggleFavorite }) => {
  const navigation = useNavigation();

  const handleNavigate = useCallback(route => {
    navigation.navigate(route);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.responsiveContainer}>
        <TouchableOpacity
          onPress={() => {
            handleNavigate('Home');
          }}
        >
          <AntDesign name="arrowleft" size={24} color="#f2f2f2" />
        </TouchableOpacity>
        <Text style={styles.title}>Detalhes</Text>
        <TouchableOpacity onPress={toggleFavorite}>
          <AntDesign
            name={isFavorite ? 'heart' : 'hearto'}
            size={24}
            color="#f2f2f2"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
