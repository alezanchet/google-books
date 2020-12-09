import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  FlatList,
} from 'react-native';

import Hoverable from '../../components/Hoverable/Hoverable';
import Footer from '../../components/Footer';

import Header from './components/Header';
import SearchInput from './components/SearchInput';

import { styles } from './styles';

const Home = () => {
  const [hoveredBook, setHoveredBook] = useState('');
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    async function loadBooks() {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`,
      );
      const json = await response.json();
      console.log(json);

      setBooks(json.items);
    }

    if (searchValue !== '') {
      loadBooks();
    }
  }, [searchValue]);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {books !== undefined &&
          books.map(book => (
            <Hoverable
              onHoverIn={() => {
                setHoveredBook(book.id);
              }}
              onHoverOut={() => {
                setHoveredBook('');
              }}
            >
              <View
                key={book.id}
                style={[
                  styles.item,
                  { borderColor: hoveredBook === book.id ? '#40BFFF' : '#fff' },
                ]}
              >
                <TouchableOpacity style={{ height: '100%', width: '100%' }}>
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
                </TouchableOpacity>
              </View>
            </Hoverable>
          ))}
      </View>
      <Header />
      <SearchInput
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder="Qual livro você procura?"
      />
      <Footer currentPage="List" />
    </View>
  );
};

export default Home;
