import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Hoverable from '../../components/Hoverable/Hoverable';
import Footer from '../../components/Footer';

import Header from './components/Header';
import SearchInput from './components/SearchInput';

import { styles } from './styles';

const Home = () => {
  const [hoveredBook, setHoveredBook] = useState('');
  const [indexPagination, setIndexPagination] = useState(10);
  const [loadingMoreBooks, setLoadingMoreBooks] = useState(false);
  const [books, setBooks] = useState();
  const [searchValue, setSearchValue] = useState('');

  const navigation = useNavigation();

  const handleNavigate = useCallback((route, book) => {
    navigation.navigate(route, { book });
  }, []);

  useEffect(() => {
    async function loadBooks() {
      // eslint-disable-next-line no-undef
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`,
      );
      const json = await response.json();

      setBooks(json.items);
    }

    if (searchValue !== '') {
      loadBooks();
    }
  }, [searchValue]);

  const loadMoreBooks = useCallback(async () => {
    setLoadingMoreBooks(true);
    // eslint-disable-next-line no-undef
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&startIndex=${indexPagination}`,
    );
    const json = await response.json();

    setLoadingMoreBooks(false);
    setBooks([...books, ...json.items]);
    setIndexPagination(indexPagination + 10);
  }, [searchValue, indexPagination, books]);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {books !== undefined &&
          books.map(book => (
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
                  style={{ height: '100%', width: '100%' }}
                  onPress={() => {
                    handleNavigate('Details', book);
                  }}
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
                </TouchableOpacity>
              </View>
            </Hoverable>
          ))}
      </View>
      {books && (
        <TouchableOpacity style={styles.buttonMore} onPress={loadMoreBooks}>
          {loadingMoreBooks ? (
            <ActivityIndicator size="small" color="#f2f2f2" />
          ) : (
            <Text style={styles.textButton}>Carregar mais...</Text>
          )}
        </TouchableOpacity>
      )}
      <Header />
      <SearchInput
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder="Qual livro você procura?"
      />
      <Footer currentPage="Home" />
    </View>
  );
};

export default Home;
