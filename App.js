import React,{useState,useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase'


export default function App() {
  const [loggedIn, setLoggedIn] = useState(null)

  useEffect(() => {
    firebase.initializeApp({
      apiKey: "AIzaSyC-UPFTWT4ocq79PrIBKVwyC_GY3yIa7Gw",
      authDomain: "books-44061.firebaseapp.com",
      projectId: "books-44061",
      storageBucket: "books-44061.appspot.com",
      messagingSenderId: "6714482192",
      appId: "1:6714482192:web:f551d1aa6d1fcade093495",
      measurementId: "G-NGT80ZRQJY"
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    })
  },[])

  const renderContent = () => {
    switch (loggedIn) {
      case true:
        return (
          <Button
            onPress={() => firebase.auth().signOut()}
          >Log Out</Button>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }

  return (
    <View style={styles.container}>
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
