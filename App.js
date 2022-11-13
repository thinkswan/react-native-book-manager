import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import About from './src/features/about/About';
import Books from './src/features/books/Books';
import booksReducer from './src/features/books/books-slice';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Books" component={Books} />
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
