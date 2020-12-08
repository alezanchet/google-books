import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes = () => {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    firebase.initializeApp({
      apiKey: 'AIzaSyC-UPFTWT4ocq79PrIBKVwyC_GY3yIa7Gw',
      authDomain: 'books-44061.firebaseapp.com',
      projectId: 'books-44061',
      storageBucket: 'books-44061.appspot.com',
      messagingSenderId: '6714482192',
      appId: '1:6714482192:web:f551d1aa6d1fcade093495',
      measurementId: 'G-NGT80ZRQJY',
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  const renderContent = () => {
    switch (loggedIn) {
      case true:
        return <AppRoutes />;
      case false:
        return <AuthRoutes />;
      default:
        return (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <ActivityIndicator size="large" color="#999" />
          </View>
        );
    }
  };

  return renderContent();
};

export default Routes;
