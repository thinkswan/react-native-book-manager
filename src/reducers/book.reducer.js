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
