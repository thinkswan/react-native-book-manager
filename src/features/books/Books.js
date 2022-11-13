import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from './books-slice';

const Books = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');

  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  const animatedValues = {
    books: useRef(new Animated.Value(0)).current,
    inputContainer: useRef(new Animated.Value(0)).current,
  };

  const animate = () => {
    return Animated.stagger(200, [
      Animated.timing(animatedValues.books, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValues.inputContainer, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => animate());

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        style={styles.booksContainer}>
        {books.map(book => {
          return (
            <Animated.View
              key={book.id}
              style={[{ opacity: animatedValues.books }, styles.book]}>
              <Text style={styles.name}>{book.name}</Text>
              <Text style={styles.author}>{book.author}</Text>
              <Text onPress={() => dispatch(removeBook(book.id))}>Remove</Text>
            </Animated.View>
          );
        })}
      </ScrollView>

      <Animated.View
        style={[
          { opacity: animatedValues.inputContainer },
          styles.inputContainer,
        ]}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={name}
            placeholder="Book name"
            onChangeText={value => setName(value)}
          />
          <TextInput
            style={styles.input}
            value={author}
            placeholder="Author's name"
            onChangeText={value => setAuthor(value)}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            dispatch(addBook({ name, author }));
            setName('');
            setAuthor('');
          }}>
          <View style={styles.addButtonContainer}>
            <Text style={styles.addButton}>+</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  booksContainer: { flex: 1, borderTopWidth: 1, borderTopColor: '#ddd' },
  book: { padding: 20 },
  name: { fontSize: 18 },
  author: { fontSize: 14, color: '#999' },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ededed',
    padding: 10,
    height: 100,
  },
  inputWrapper: { flex: 1 },
  input: {
    flex: 1,
    backgroundColor: '#ededed',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    marginBottom: 5,
    padding: 7,
    height: 44,
  },
  addButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    borderRadius: 20,
    marginLeft: 10,
    width: 80,
    height: 80,
  },
  addButton: { fontSize: 28, lineHeight: 28 },
});

export default Books;
