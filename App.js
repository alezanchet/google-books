import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
//
const App = () => (
  <NavigationContainer>
    <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
