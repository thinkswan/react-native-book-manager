import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import Books from './src/features/books/Books';
import booksReducer from './src/features/books/books-slice';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <Books />
    </Provider>
  );
};

export default App;
