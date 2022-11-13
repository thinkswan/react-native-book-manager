import { createSlice } from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const booksSlice = createSlice({
  name: 'books',
  initialState: [
    {
      id: uuidv4(),
      name: 'East of Eden',
      author: 'John Steinbeck',
    },
    {
      id: uuidv4(),
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
    },
    {
      id: uuidv4(),
      name: 'To Kill a Mockingbird',
      author: 'Harper Lee',
    },
    {
      id: uuidv4(),
      name: '1984',
      author: 'George Orwell',
    },
    {
      id: uuidv4(),
      name: 'Lolita',
      author: 'Vladimir Nabokov',
    },
  ],
  reducers: {
    addBook(state, action) {
      state.push({ id: uuidv4(), ...action.payload });
    },
    removeBook(state, action) {
      const bookIndex = state.findIndex(book => book.id === action.payload);

      state.splice(bookIndex, 1);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
