import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import firebase from 'firebase';

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
              title: book.val().title,
            });
          });

          setFavorites(favoritesData);
          setLoading(false);
        });
    }

    loadFavorites();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
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
                <TouchableOpacity style={{ height: '100%', width: '100%' }}>
                  {/* {book.volumeInfo.imageLinks !== undefined && (
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
                  )} */}
                  <Text style={styles.textItem}>{book.title}</Text>
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
