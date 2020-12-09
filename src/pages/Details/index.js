import React, { useCallback, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import firebase from 'firebase';

import Footer from '../../components/Footer';

import Header from './components/Header';

import { styles } from './styles';

const Details = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const route = useRoute();

  const { book } = route.params;

  const toggleFavorite = useCallback(() => {
    const user = firebase.auth().currentUser;

    if (isFavorite) {
      firebase
        .database()
        .ref(`/users/${user.uid}/favorites/${book.id}`)
        .remove();
    } else {
      firebase
        .database()
        .ref(`/users/${user.uid}/favorites/${book.id}`)
        .set(book);
    }

    setIsFavorite(!isFavorite);
  }, [isFavorite, book]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={book.volumeInfo.imageLinks.thumbnail}
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{book.volumeInfo.title}</Text>

        {book.volumeInfo.publishedDate && (
          <Text style={styles.date}>
            Data de publicação: {book.volumeInfo.publishedDate}
          </Text>
        )}
      </View>
      <Header isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
      <Footer currentPage="Home" />
    </View>
  );
};

export default Details;
