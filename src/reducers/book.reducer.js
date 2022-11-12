import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { ADD_BOOK, REMOVE_BOOK } from '../actions';

const initialState = {
  books: [
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
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [...state.books, action.book],
      };
    case REMOVE_BOOK:
      return {
        books: state.books.filter(book => book.id !== action.id),
      };
    default:
      return state;
  }
};

export default bookReducer;
