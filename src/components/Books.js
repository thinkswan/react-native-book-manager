import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { addBook } from '../actions';

const Books = ({ books, dispatchAddBook }) => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');

  const addBookHandler = () => {
    dispatchAddBook({ name, author });
    setName('');
    setAuthor('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Books</Text>

      <ScrollView
        keyboardShouldPersistTaps="always"
        style={styles.booksContainer}>
        {books.map((book, i) => (
          <View key={i} style={styles.book}>
            <Text style={styles.name}>{book.name}</Text>
            <Text style={styles.author}>{book.author}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
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

        <TouchableOpacity onPress={addBookHandler}>
          <View style={styles.addButtonContainer}>
            <Text style={styles.addButton}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  },
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

const mapStateToProps = state => ({ books: state.bookReducer.books });
const mapDispatchToProps = {
  dispatchAddBook: book => addBook(book),
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
