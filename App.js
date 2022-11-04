import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Books from './src/components/Books';
import rootReducer from './src/reducers';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Books />
    </Provider>
  );
};

export default App;
