import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

const Books = ({ books }) => {
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
});

const mapStateToProps = state => ({ books: state.bookReducer.books });

export default connect(mapStateToProps)(Books);
