import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import About from './src/features/about/About';
import Books from './src/features/books/Books';
import booksReducer from './src/features/books/books-slice';

Ionicons.loadFont().then();

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
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Books') {
                return (
                  <Ionicons
                    name={focused ? 'ios-book' : 'ios-book-outline'}
                    size={size}
                    color={color}
                  />
                );
              }

              return (
                <Ionicons
                  name={
                    focused
                      ? 'ios-information-circle'
                      : 'ios-information-circle-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            },
            tabBarActiveTintColor: 'dodgerblue',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Books" component={Books} />
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
