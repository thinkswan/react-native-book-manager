import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export function addBook(book) {
  return { type: ADD_BOOK, book: { ...book, id: uuidv4() } };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}
