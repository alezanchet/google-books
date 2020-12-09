import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Details from '../pages/Details';

const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#f2f2f2' },
    }}
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Details" component={Details} />
    <App.Screen name="Favorites" component={Favorites} />
  </App.Navigator>
);

export default AppRoutes;
