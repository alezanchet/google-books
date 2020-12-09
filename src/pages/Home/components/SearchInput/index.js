import React, { useState, useCallback } from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

const SearchInput = ({ value = '', ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!value);
  }, [value]);

  return (
    <View
      style={[
        styles.container,
        { borderColor: isFocused ? '#40BFFF' : '#fff' },
      ]}
    >
      <Feather
        style={styles.icon}
        name="search"
        size={24}
        color={isFocused || isFilled ? '#40BFFF' : '#808080'}
      />
      <TextInput
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        style={[styles.input, { outline: 'none' }]}
        value={value}
        placeholder="Qual livro você procura?"
        placeholderTextColor="#808080"
        {...rest}
      />
    </View>
  );
};

export default SearchInput;
