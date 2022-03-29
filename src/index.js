import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import pokemonsReducer from './features/pokemons';
import paginationReducer from './features/pagination';

import Home from './pages/Home';
import GlobalStyles from './styles/global';

const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    pagination: paginationReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
