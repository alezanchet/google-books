import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import firebase from 'firebase';
import { FontAwesome } from '@expo/vector-icons';

import Hoverable from '../../components/Hoverable/Hoverable';
import Footer from '../../components/Footer';

import Header from './components/Header';

import { styles } from './styles';

const Favorites = () => {
  const [hoveredBook, setHoveredBook] = useState('');
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    function loadFavorites() {
      const user = firebase.auth().currentUser;

      firebase
        .database()
        .ref(`/users/${user.uid}/favorites`)
        .on('value', snapshot => {
          const favoritesData = [];

          snapshot.forEach(book => {
            favoritesData.push({
              id: book.val().id,
              volumeInfo: book.val().volumeInfo,
            });
          });

          setFavorites(favoritesData);
          setLoading(false);
        });
    }

    loadFavorites();
  }, []);

  const handleRemoveFavorite = useCallback(id => {
    const user = firebase.auth().currentUser;

    firebase.database().ref(`/users/${user.uid}/favorites/${id}`).remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {loading && <ActivityIndicator size="large" color="#808080" />}
        {favorites &&
          favorites.map(book => (
            <Hoverable
              key={book.id}
              onHoverIn={() => {
                setHoveredBook(book.id);
              }}
              onHoverOut={() => {
                setHoveredBook('');
              }}
            >
              <View
                style={[
                  styles.item,
                  { borderColor: hoveredBook === book.id ? '#40BFFF' : '#fff' },
                ]}
              >
                <TouchableOpacity
                  onPress={() => {
                    handleRemoveFavorite(book.id);
                  }}
                  style={{ height: '100%', width: '100%' }}
                >
                  {book.volumeInfo.imageLinks !== undefined && (
                    <Image
                      style={{
                        height: 150,
                        width: '100%',
                        resizeMode: 'contain',
                      }}
                      source={{
                        uri: book.volumeInfo.imageLinks.smallThumbnail,
                      }}
                    />
                  )}
                  <Text style={styles.textItem}>{book.volumeInfo.title}</Text>

                  {hoveredBook === book.id && (
                    <View style={styles.hoveredView}>
                      <FontAwesome name="trash-o" size={50} color="#f2f2f2" />
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            </Hoverable>
          ))}
      </View>
      <Header />
      <Footer currentPage="Favorites" />
    </View>
  );
};

export default Favorites;
