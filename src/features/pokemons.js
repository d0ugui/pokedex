import { createSlice } from '@reduxjs/toolkit';

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    pokemons: [],
    totalPokemons: 0,
  },
  reducers: {
    settingPokemons: (state, action) => {
      state.pokemons = action.payload.pokemons;
    },
  },
});

export const { settingPokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
