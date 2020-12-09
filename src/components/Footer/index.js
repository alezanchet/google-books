import React, { useMemo } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

const Footer = ({ currentPage }) => {
  const colorList = useMemo(() => {
    let color;
    if (currentPage === 'List') {
      color = '#40BFFF';
    } else {
      color = '#808080';
    }
    return color;
  }, [currentPage]);

  const colorFav = useMemo(() => {
    let color;
    if (currentPage === 'Favorites') {
      color = '#40BFFF';
    } else {
      color = '#808080';
    }
    return color;
  }, [currentPage]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.button}>
          <Feather name="menu" size={24} color={colorList} />
          <Text style={[styles.textButton, { color: colorList }]}>
            Listagem
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log('fav');
          }}
          style={styles.button}
        >
          <Feather name="heart" size={24} color={colorFav} />
          <Text style={[styles.textButton, { color: colorFav }]}>
            Favoritos
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
