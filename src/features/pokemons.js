import { createSlice } from '@reduxjs/toolkit';

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    pokemons: [],
    totalPokemons: 0,
    favoritePokemons: [],
    searchPokemons: null,
  },
  reducers: {
    settingPokemons: (state, action) => {
      state.pokemons = action.payload.pokemons;
    },
    searchPokemons: (state, action) => {
      state.searchPokemons = action.payload.res;
    },
    storagePokemons: (state, action) => {
      state.favoritePokemons = action.payload.storageFavs;
    },
    addFavPokemon: (state, action) => {
      const ifExists = state.favoritePokemons.find((poke) => {
        if (poke.name === action.payload.fav.name) {
          return true;
        }

        return false;
      });

      if (!ifExists) {
        state.favoritePokemons.push(action.payload.fav.name);
        window.localStorage.setItem('favPokes', JSON.stringify(state.favoritePokemons));
      }
    },
    removeFavPokemon: (state, action) => {
      state.favoritePokemons = state.favoritePokemons.filter((poke) => (
        poke != action.payload.fav.name
      ));

      window.localStorage.setItem('favPokes', JSON.stringify(state.favoritePokemons));

      // window.localStorage.removeItem('favPokes', action.payload.fav.name);
    },
  },
});

export const {
  settingPokemons, addFavPokemon, removeFavPokemon, storagePokemons, searchPokemons,
} = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
