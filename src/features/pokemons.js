import { createSlice } from '@reduxjs/toolkit';

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    pokemons: [],
    favoritePokemons: [],
    favoriteMode: false,
    selectedPokemon: false,
    isLoading: true,
  },
  reducers: {
    settingPokemons: (state, action) => {
      state.pokemons = action.payload.pokemons;
    },
    setFavorites: (state) => {
      state.favoriteMode = !state.favoriteMode;
    },
    storagePokemons: (state, action) => {
      state.favoritePokemons = action.payload.storageFavs;
    },
    selectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload.pokemon;
    },
    removeSelectedPokemon: (state, action) => {
      state.selectedPokemon = false;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
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
  settingPokemons, setFavorites, addFavPokemon, removeFavPokemon, storagePokemons,
  setIsLoading, selectedPokemon, removeSelectedPokemon,
} = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
